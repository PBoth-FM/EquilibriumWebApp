import React, { useState } from 'react';
import { Mail, CheckCircle, Bell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import { analytics } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';
import appPreviewImage from '../assets/equilibrium_launching_soon (1).jpg';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    // Track page view
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: 'Coming Soon',
        page_location: window.location.href
      });
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('email_signups')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique constraint violation
          setError('This email is already signed up for notifications');
        } else {
          throw supabaseError;
        }
      } else {
        setIsSubmitted(true);
        setEmail('');
        
        // Track email signup
        if (analytics) {
          logEvent(analytics, 'email_signup', {
            source: 'coming_soon_page'
          });
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Email signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hackathon Judges Notice - High Prominence */}
          <div className="mb-12">
            <div className="bg-gradient-primary p-6 rounded-2xl text-white text-center border-2 border-primary-violet/20 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-serif font-bold">
                  Bolt Hackathon Judges
                </h3>
              </div>
              <p className="text-white/95 text-lg">
                A TestFlight build has been shared with <strong>testing@devpost.com</strong>. 
                Please check your email for installation instructions.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
                Coming Soon to the{' '}
                <span className="relative">
                  App Store
                  <div className="absolute left-0 right-0 h-1 bg-gradient-primary rounded-full" style={{ bottom: '0' }}></div>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-neutral-600 mb-8 leading-relaxed">
                Breath training that works for busy, analytical minds. Get real-time feedback and build a practice that actually sticks.
              </p>

              {/* Value Propositions */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">See your calm in real-time - no guesswork, just results</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Gamified with points and achievements</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Based on 30+ years of research</span>
                </div>
              </div>

              {/* Email Signup Form */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Get notified when we launch
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-neutral-400" />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-violet focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                      >
                        {isSubmitting ? 'Signing up...' : 'Notify Me'}
                      </button>
                    </div>
                    
                    {error && (
                      <p className="text-red-600 text-sm">{error}</p>
                    )}
                    
                    <p className="text-neutral-500 text-sm">
                      We'll only email you when the app is ready to download. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-primary-green" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      You're on the list!
                    </h4>
                    <p className="text-neutral-600">
                      We'll notify you as soon as Equilibrium is available in the App Store.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <img
                  src={appPreviewImage}
                  alt="Equilibrium app preview showing meditation interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}