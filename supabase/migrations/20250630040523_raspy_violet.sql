/*
  # Create Email Signups Table

  1. New Tables
    - `email_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `email_signups` table
    - Allow public inserts for email collection
    - Allow authenticated reads for admin interface
*/

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert email signups
CREATE POLICY "Anyone can insert email signups"
  ON email_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read email signups (for admin interface)
CREATE POLICY "Authenticated users can read email signups"
  ON email_signups
  FOR SELECT
  TO authenticated
  USING (true);

-- Index for performance
CREATE INDEX IF NOT EXISTS email_signups_created_at_idx 
  ON email_signups(created_at DESC);