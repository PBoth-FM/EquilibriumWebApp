/*
  # Create Achievements Table

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `achievement_type` (text: streak, efficiency, milestone, special)
      - `achievement_name` (text)
      - `achievement_description` (text)
      - `icon_name` (text, for UI icons)
      - `unlocked_at` (timestamp)

  2. Security
    - Enable RLS on `achievements` table
    - Add policy for users to read their own achievements
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  achievement_type text NOT NULL CHECK (achievement_type IN ('streak', 'efficiency', 'milestone', 'special')),
  achievement_name text NOT NULL,
  achievement_description text NOT NULL,
  icon_name text NOT NULL DEFAULT 'trophy',
  unlocked_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read own achievements"
  ON achievements
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own achievements"
  ON achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Index for performance
CREATE INDEX IF NOT EXISTS achievements_user_id_idx 
  ON achievements(user_id, unlocked_at DESC);