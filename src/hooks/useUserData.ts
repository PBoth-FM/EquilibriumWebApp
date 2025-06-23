import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

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

export function useUserProfile() {
  const { user } = useAuthStore();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          // If profile doesn't exist, create it
          if (error.code === 'PGRST116') {
            const { data: newProfile, error: createError } = await supabase
              .from('user_profiles')
              .insert({
                id: user.id,
                full_name: user.user_metadata?.full_name,
              })
              .select()
              .single();

            if (createError) throw createError;
            setProfile(newProfile);
          } else {
            throw error;
          }
        } else {
          setProfile(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [user]);

  return { profile, loading, error };
}

export function useUserStats() {
  const { user } = useAuthStore();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      if (!user) {
        setStats(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('user_stats')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            // No stats yet, create demo data
            await supabase.rpc('create_demo_data_for_user', {
              target_user_id: user.id
            });

            // Fetch stats again
            const { data: newStats, error: fetchError } = await supabase
              .from('user_stats')
              .select('*')
              .eq('user_id', user.id)
              .single();

            if (fetchError) throw fetchError;
            setStats(newStats);
          } else {
            throw error;
          }
        } else {
          setStats(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [user]);

  return { stats, loading, error };
}

export function useRecentSessions(limit: number = 10) {
  const { user } = useAuthStore();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSessions() {
      if (!user) {
        setSessions([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;
        setSessions(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch sessions');
      } finally {
        setLoading(false);
      }
    }

    fetchSessions();
  }, [user, limit]);

  return { sessions, loading, error };
}

export function useAchievements() {
  const { user } = useAuthStore();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAchievements() {
      if (!user) {
        setAchievements([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .eq('user_id', user.id)
          .order('unlocked_at', { ascending: false });

        if (error) throw error;
        setAchievements(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch achievements');
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, [user]);

  return { achievements, loading, error };
}