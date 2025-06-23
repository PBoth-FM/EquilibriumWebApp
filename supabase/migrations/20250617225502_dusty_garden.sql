/*
  # Create Demo Data

  This migration creates sample data for demonstration purposes.
  It will only run if there are no existing sessions for the user.
  
  1. Demo Sessions
    - Creates realistic biofeedback training sessions over the past 2 weeks
    - Varies points, efficiency, and duration to show progression
    
  2. Demo Achievements  
    - Awards initial achievements based on demo sessions
    
  3. Demo User Stats
    - Calculates and populates user stats based on demo sessions
*/

-- Function to create demo data for a user
CREATE OR REPLACE FUNCTION create_demo_data_for_user(target_user_id uuid)
RETURNS void AS $$
DECLARE
  demo_sessions_data jsonb;
  session_record jsonb;
  achievement_record jsonb;
BEGIN
  -- Check if user already has sessions
  IF EXISTS (SELECT 1 FROM sessions WHERE user_id = target_user_id) THEN
    RETURN; -- Don't create demo data if user has real data
  END IF;

  -- Create demo sessions (last 14 days with some gaps for realism)
  demo_sessions_data := '[
    {"date": "2025-01-13", "points": 45, "efficiency": 62, "duration": 240},
    {"date": "2025-01-14", "points": 52, "efficiency": 68, "duration": 300},
    {"date": "2025-01-16", "points": 48, "efficiency": 65, "duration": 270},
    {"date": "2025-01-17", "points": 58, "efficiency": 72, "duration": 330},
    {"date": "2025-01-18", "points": 61, "efficiency": 75, "duration": 300},
    {"date": "2025-01-20", "points": 55, "efficiency": 71, "duration": 285},
    {"date": "2025-01-21", "points": 67, "efficiency": 78, "duration": 360},
    {"date": "2025-01-22", "points": 63, "efficiency": 76, "duration": 315},
    {"date": "2025-01-23", "points": 72, "efficiency": 82, "duration": 390},
    {"date": "2025-01-24", "points": 69, "efficiency": 80, "duration": 345},
    {"date": "2025-01-25", "points": 75, "efficiency": 84, "duration": 420},
    {"date": "2025-01-26", "points": 78, "efficiency": 87, "duration": 390},
    {"date": "2025-01-27", "points": 82, "efficiency": 89, "duration": 450}
  ]'::jsonb;

  -- Insert demo sessions
  FOR session_record IN SELECT * FROM jsonb_array_elements(demo_sessions_data)
  LOOP
    INSERT INTO sessions (
      user_id,
      points,
      efficiency_percentage,
      duration_seconds,
      session_date,
      created_at
    ) VALUES (
      target_user_id,
      (session_record->>'points')::integer,
      (session_record->>'efficiency')::integer,
      (session_record->>'duration')::integer,
      (session_record->>'date')::date,
      (session_record->>'date')::date + INTERVAL '9 hours' -- Simulate morning sessions
    );
  END LOOP;

  -- Create demo achievements
  INSERT INTO achievements (user_id, achievement_type, achievement_name, achievement_description, icon_name, unlocked_at)
  VALUES 
    (target_user_id, 'milestone', 'First Session', 'Completed your first biofeedback training session', 'play', '2025-01-13 09:15:00'),
    (target_user_id, 'streak', '3-Day Streak', 'Maintained practice for 3 consecutive days', 'flame', '2025-01-18 09:30:00'),
    (target_user_id, 'efficiency', 'Efficiency Expert', 'Achieved 80%+ efficiency in a session', 'target', '2025-01-23 09:45:00'),
    (target_user_id, 'milestone', '10 Sessions', 'Completed 10 biofeedback training sessions', 'trophy', '2025-01-25 09:20:00');

  -- Calculate user stats (this will be done automatically by the trigger)
  PERFORM calculate_user_stats(target_user_id);

END;
$$ LANGUAGE plpgsql SECURITY DEFINER;