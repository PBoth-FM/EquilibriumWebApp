/*
  # Create User Stats Table

  1. New Tables
    - `user_stats`
      - `user_id` (uuid, primary key, foreign key to auth.users)
      - `total_sessions` (integer, default 0)
      - `total_points` (integer, default 0)
      - `total_duration_seconds` (integer, default 0)
      - `average_efficiency` (decimal, calculated field)
      - `current_streak_days` (integer, default 0)
      - `longest_streak_days` (integer, default 0)
      - `last_session_date` (date)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `user_stats` table
    - Add policies for users to read/update their own stats

  3. Functions
    - Function to recalculate user stats after session changes
    - Trigger to automatically update stats when sessions are modified
*/

CREATE TABLE IF NOT EXISTS user_stats (
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  total_sessions integer DEFAULT 0,
  total_points integer DEFAULT 0,
  total_duration_seconds integer DEFAULT 0,
  average_efficiency decimal(5,2) DEFAULT 0.00,
  current_streak_days integer DEFAULT 0,
  longest_streak_days integer DEFAULT 0,
  last_session_date date,
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read own stats"
  ON user_stats
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own stats"
  ON user_stats
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own stats"
  ON user_stats
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Function to calculate user stats
CREATE OR REPLACE FUNCTION calculate_user_stats(target_user_id uuid)
RETURNS void AS $$
DECLARE
  total_sessions_count integer;
  total_points_sum integer;
  total_duration_sum integer;
  avg_efficiency decimal;
  last_session date;
  current_streak integer;
  longest_streak integer;
BEGIN
  -- Get basic aggregations
  SELECT 
    COALESCE(COUNT(*), 0),
    COALESCE(SUM(points), 0),
    COALESCE(SUM(duration_seconds), 0),
    COALESCE(AVG(efficiency_percentage), 0),
    MAX(session_date)
  INTO 
    total_sessions_count,
    total_points_sum,
    total_duration_sum,
    avg_efficiency,
    last_session
  FROM sessions 
  WHERE user_id = target_user_id;

  -- Calculate current streak
  WITH daily_sessions AS (
    SELECT DISTINCT session_date
    FROM sessions 
    WHERE user_id = target_user_id
    ORDER BY session_date DESC
  ),
  streak_calc AS (
    SELECT 
      session_date,
      session_date - ROW_NUMBER() OVER (ORDER BY session_date DESC)::integer AS streak_group
    FROM daily_sessions
  ),
  current_streak_calc AS (
    SELECT COUNT(*) as streak_length
    FROM streak_calc
    WHERE streak_group = (
      SELECT streak_group 
      FROM streak_calc 
      WHERE session_date = (SELECT MAX(session_date) FROM daily_sessions)
    )
    AND session_date >= CURRENT_DATE - INTERVAL '30 days'
  )
  SELECT COALESCE(streak_length, 0) INTO current_streak FROM current_streak_calc;

  -- For longest streak, we'll use current streak for now (can be enhanced later)
  longest_streak := GREATEST(current_streak, COALESCE((
    SELECT longest_streak_days FROM user_stats WHERE user_id = target_user_id
  ), 0));

  -- Upsert user stats
  INSERT INTO user_stats (
    user_id,
    total_sessions,
    total_points,
    total_duration_seconds,
    average_efficiency,
    current_streak_days,
    longest_streak_days,
    last_session_date,
    updated_at
  )
  VALUES (
    target_user_id,
    total_sessions_count,
    total_points_sum,
    total_duration_sum,
    avg_efficiency,
    current_streak,
    longest_streak,
    last_session,
    now()
  )
  ON CONFLICT (user_id) DO UPDATE SET
    total_sessions = EXCLUDED.total_sessions,
    total_points = EXCLUDED.total_points,
    total_duration_seconds = EXCLUDED.total_duration_seconds,
    average_efficiency = EXCLUDED.average_efficiency,
    current_streak_days = EXCLUDED.current_streak_days,
    longest_streak_days = EXCLUDED.longest_streak_days,
    last_session_date = EXCLUDED.last_session_date,
    updated_at = now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle session changes
CREATE OR REPLACE FUNCTION handle_session_change()
RETURNS trigger AS $$
BEGIN
  -- Recalculate stats for the affected user
  IF TG_OP = 'DELETE' THEN
    PERFORM calculate_user_stats(OLD.user_id);
    RETURN OLD;
  ELSE
    PERFORM calculate_user_stats(NEW.user_id);
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically update user stats
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_session_change'
  ) THEN
    CREATE TRIGGER on_session_change
      AFTER INSERT OR UPDATE OR DELETE ON sessions
      FOR EACH ROW EXECUTE PROCEDURE handle_session_change();
  END IF;
END $$;