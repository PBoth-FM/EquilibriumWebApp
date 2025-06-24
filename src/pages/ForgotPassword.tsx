import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Logo from '../components/ui/Logo';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { resetPassword, error, clearError, loading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    clearError();

    try {
      await resetPassword(email);
      setIsSubmitted(true);
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
            Check your email
          </h1>
          <p className="text-neutral-600 mb-8">
            We've sent password reset instructions to <strong>{email}</strong>. 
            Follow the link in the email to reset your password.
          </p>
          <Link
            to="/signin"
            className="inline-flex items-center justify-center w-full bg-gradient-primary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Back button */}
        <Link
          to="/signin"
          className="inline-flex items-center text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo clickable onClick={handleLogoClick} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
            Reset your password
          </h1>
          <p className="text-neutral-600">
            Enter your email address and we'll send you instructions to reset your password.
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || loading || !email}
            className="w-full bg-gradient-primary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Sending reset email...' : 'Send Reset Email'}
          </button>
        </form>

        {/* Back to sign in */}
        <div className="mt-6 text-center">
          <p className="text-neutral-600">
            Remember your password?{' '}
            <Link
              to="/signin"
              className="font-medium text-primary-violet hover:text-primary-magenta transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}