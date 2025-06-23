import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Logo from './ui/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!user ? (
              // Landing page navigation
              <>
                <a 
                  href="#how-it-works" 
                  className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  How It Works
                </a>
                <Link
                  to="/learn"
                  className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  Learn
                </Link>
                <a 
                  href="#testimonials" 
                  className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  Reviews
                </a>
                <Link
                  to="/signin"
                  className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </>
            ) : (
              // Authenticated user navigation
              <>
                <Link
                  to="/dashboard"
                  className={`font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'text-primary-violet' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/learn"
                  className={`font-medium transition-colors ${
                    isActive('/learn') 
                      ? 'text-primary-violet' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Learn
                </Link>
                <Link
                  to="/progress"
                  className={`font-medium transition-colors ${
                    isActive('/progress') 
                      ? 'text-primary-violet' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Progress
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100 bg-white/98 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {!user ? (
                // Landing page mobile navigation
                <>
                  <a 
                    href="#how-it-works" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors px-2 py-1"
                  >
                    How It Works
                  </a>
                  <Link
                    to="/learn"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors px-2 py-1"
                  >
                    Learn
                  </Link>
                  <a 
                    href="#testimonials" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors px-2 py-1"
                  >
                    Reviews
                  </a>
                  <Link
                    to="/signin"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors text-left px-2 py-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 mx-2"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                // Authenticated user mobile navigation
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors px-2 py-1 ${
                      isActive('/dashboard') 
                        ? 'text-primary-violet' 
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/learn"
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors px-2 py-1 ${
                      isActive('/learn') 
                        ? 'text-primary-violet' 
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Learn
                  </Link>
                  <Link
                    to="/progress"
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors px-2 py-1 ${
                      isActive('/progress') 
                        ? 'text-primary-violet' 
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Progress
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center text-neutral-600 hover:text-neutral-900 font-medium transition-colors text-left px-2 py-1"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}