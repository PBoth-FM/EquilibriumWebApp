import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id: string;
  email: string;
  full_name?: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  full_name?: string;
  timezone: string;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  user_id: string;
  points: number;
  efficiency_percentage: number;
  duration_seconds: number;
  session_date: string;
  hrv_data: Record<string, any>;
  created_at: string;
}

export interface Achievement {
  id: string;
  user_id: string;
  achievement_type: string;
  achievement_name: string;
  achievement_description: string;
  icon_name: string;
  unlocked_at: string;
}

export interface UserStats {
  user_id: string;
  total_sessions: number;
  total_points: number;
  total_duration_seconds: number;
  average_efficiency: number;
  current_streak_days: number;
  longest_streak_days: number;
  last_session_date?: string;
  updated_at: string;
}