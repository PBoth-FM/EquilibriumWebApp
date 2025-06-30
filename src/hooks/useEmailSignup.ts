import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export function useEmailSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { user } = useAuthStore();

  const submitEmail = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const { error: insertError } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (insertError) {
        if (insertError.code === '23505') { // Unique constraint violation
          setError('This email is already registered for notifications.');
        } else if (user) {
          // If user is authenticated and getting an error, it's likely the RLS policy issue
          setError("You're already a registered user!");
        } else {
          throw insertError;
        }
      } else {
        setSuccess(true);
      }
    } catch (err) {
      // Fallback error handling
      if (user) {
        setError("You're already a registered user!");
      } else {
        setError(err instanceof Error ? err.message : 'Failed to sign up for notifications');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearState = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    submitEmail,
    loading,
    error,
    success,
    clearState
  };
}

export function useEmailSignups() {
  const [signups, setSignups] = useState<Array<{
    id: string;
    email: string;
    created_at: string;
  }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSignups = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('email_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setSignups(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch email signups');
    } finally {
      setLoading(false);
    }
  };

  return {
    signups,
    loading,
    error,
    fetchSignups
  };
}