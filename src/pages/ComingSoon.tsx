import React from 'react';
import { Bell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { analytics } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';
import appPreviewImage from '../assets/equilibrium_launching_soon (1).jpg';

export default function ComingSoon() {
  React.useEffect(() => {
    // Track page view
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: 'Coming Soon',
        page_location: window.location.href
      });
    }
  }, []);

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
              
              <p className="text-xl sm:text-2xl text-neutral-600 mb-10 leading-relaxed">
                Breath training that works for busy, analytical minds. Get real-time feedback and build a practice that actually sticks.
              </p>

              {/* Coming Soon Message */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Available Soon
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We're putting the finishing touches on Equilibrium and will be launching in the App Store soon. 
                  Thank you for your interest in transforming your stress response through scientifically-proven breath training.
                </p>
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