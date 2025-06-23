import { create } from 'zustand';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: SupabaseUser | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName?: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  error: null,

  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      set({ user: data.user, loading: false });
    } catch (error) {
      set({ 
        error: error.message || 'Failed to sign in',
        loading: false 
      });
      throw error;
    }
  },

  signUp: async (email: string, password: string, fullName?: string) => {
    try {
      set({ loading: true, error: null });
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      // Note: User will need to confirm email before they can sign in
      set({ loading: false });
    } catch (error) {
      set({ 
        error: error.message || 'Failed to sign up',
        loading: false 
      });
      throw error;
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;

      set({ user: null, loading: false });
    } catch (error) {
      set({ 
        error: error.message || 'Failed to sign out',
        loading: false 
      });
    }
  },

  resetPassword: async (email: string) => {
    try {
      set({ loading: true, error: null });
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      set({ loading: false });
    } catch (error) {
      set({ 
        error: error.message || 'Failed to send reset email',
        loading: false 
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),

  initialize: async () => {
    try {
      set({ loading: true });

      // Get initial session
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) throw error;

      set({ user: session?.user ?? null, loading: false });

      // Listen for auth changes
      supabase.auth.onAuthStateChange((event, session) => {
        set({ user: session?.user ?? null, loading: false });
      });
    } catch (error) {
      set({ 
        error: error.message || 'Failed to initialize auth',
        loading: false 
      });
    }
  },
}));