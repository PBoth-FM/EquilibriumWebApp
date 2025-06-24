import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Logo from '../components/ui/Logo';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { signIn, error, clearError, loading } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) return;
    
    setIsSubmitting(true);
    clearError();

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      // Error is handled in the store
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo clickable onClick={handleLogoClick} />
            </div>
            <h1 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
              Welcome back
            </h1>
            <p className="text-neutral-600">
              Sign in to continue your breath training journey
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-violet focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-violet focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-primary-violet hover:text-primary-magenta transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || loading || !email || !password}
              className="w-full bg-gradient-primary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Sign up link */}
          <div className="mt-6 text-center">
            <p className="text-neutral-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-primary-violet hover:text-primary-magenta transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-primary items-center justify-center">
        <div className="max-w-md text-center text-white p-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="flex items-end space-x-0.5">
              <div className="w-1.5 h-6 bg-white rounded-sm"></div>
              <div className="w-1.5 h-8 bg-white rounded-sm"></div>
              <div className="w-1.5 h-4 bg-white rounded-sm"></div>
              <div className="w-1.5 h-7 bg-white rounded-sm"></div>
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold mb-4">
            Transform stress into focus
          </h2>
          <p className="text-white/90 leading-relaxed">
            Join thousands of professionals using real-time breath training to optimize their mental performance and build lasting wellness habits.
          </p>
        </div>
      </div>
    </div>
  );
}