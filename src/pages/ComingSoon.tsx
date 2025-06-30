import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEmailSignup } from '../hooks/useEmailSignup';
import { Mail, TestTube, Clock, CheckCircle } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const { submitEmail, loading, error, success, clearState } = useEmailSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    await submitEmail(email);
    if (!error) {
      setEmail('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error || success) {
      clearState();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
              Equilibrium is{' '}
              <span className="relative">
                Coming Soon
                <div className="absolute left-0 right-0 h-1 bg-gradient-primary rounded-full" style={{ bottom: '0' }}></div>
              </span>{' '}
              to the App Store
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We're putting the finishing touches on the most advanced breath training app ever created. Get ready to transform your stress response with real-time biofeedback.
            </p>
          </div>

          {/* Judges Section - First and Prominent */}
          <div className="bg-gradient-primary p-8 rounded-3xl text-white text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <TestTube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              For Bolt Hackathon Judges
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              We've sent you a special TestFlight build for evaluation! Check your email at{' '}
              <span className="font-semibold">testing@devpost.com</span> for download instructions.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-medium">
              <Mail className="w-5 h-5 mr-2" />
              TestFlight invitation sent to testing@devpost.com
            </div>
          </div>

          {/* Public Email Signup Section */}
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                Be the First to Know
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Enter your email address to get notified the moment Equilibrium becomes available in the App Store. No spam, just a single notification when we launch.
              </p>
            </div>

            {/* Email Form */}
            <div className="max-w-md mx-auto">
              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-green-700">
                    We'll notify you as soon as Equilibrium is available in the App Store.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-violet focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full bg-gradient-primary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? 'Adding you to the list...' : 'Notify Me When Available'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-violet/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary-violet rounded-full"></div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Real-time Feedback</h4>
                <p className="text-neutral-600 text-sm">See your heart rate variability change as you breathe</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-magenta/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary-magenta rounded-full"></div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Apple Watch Integration</h4>
                <p className="text-neutral-600 text-sm">Seamless heart rate monitoring during sessions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary-orange rounded-full"></div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Progress Tracking</h4>
                <p className="text-neutral-600 text-sm">Gamified achievements and detailed analytics</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}