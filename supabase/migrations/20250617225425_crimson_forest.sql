/*
  # Create Sessions Table

  1. New Tables
    - `sessions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `points` (integer, 0-100 typical range)
      - `efficiency_percentage` (integer, 0-100)
      - `duration_seconds` (integer)
      - `session_date` (date)
      - `hrv_data` (jsonb, for future detailed analytics)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `sessions` table
    - Add policies for users to manage their own sessions
    
  3. Indexes
    - Index on user_id and session_date for fast queries
*/

CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  points integer NOT NULL DEFAULT 0 CHECK (points >= 0 AND points <= 100),
  efficiency_percentage integer NOT NULL DEFAULT 0 CHECK (efficiency_percentage >= 0 AND efficiency_percentage <= 100),
  duration_seconds integer NOT NULL DEFAULT 0 CHECK (duration_seconds > 0),
  session_date date NOT NULL DEFAULT CURRENT_DATE,
  hrv_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read own sessions"
  ON sessions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON sessions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON sessions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS sessions_user_id_date_idx 
  ON sessions(user_id, session_date DESC);

CREATE INDEX IF NOT EXISTS sessions_user_id_created_idx 
  ON sessions(user_id, created_at DESC);