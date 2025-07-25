import React from 'react';
import { Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate('/coming-soon');
  };

  const handleDemoClick = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <a 
            href="/learn#research-section"
            className="inline-flex items-center px-4 py-2 bg-neutral-50 rounded-lg text-neutral-600 text-sm font-medium mb-8 animate-fade-in"
          >
            Based on 30+ years of research
          </a>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 animate-slide-up">
            Meditation that{' '}
            <span className="relative">
              works
              <div className="absolute left-0 right-0 h-1 bg-gradient-primary rounded-full" style={{ bottom: '0' }}></div>
            </span>{' '}
            for busy, analytical minds
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Stop wondering if you're "doing it right." See your progress in real-time and build a practice that actually sticks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up delay-400">
            <button 
              onClick={handleDownloadClick}
              className="group bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download from App Store
            </button>
            
            <button 
              onClick={handleDemoClick}
              className="text-neutral-700 border-2 border-neutral-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200"
            >
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <p className="text-neutral-500 text-sm mb-6">Trusted by professionals at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              <div className="text-neutral-600 font-semibold">Stanford University</div>
              <div className="text-neutral-600 font-semibold">Disagreeing Better</div>
              <div className="text-neutral-600 font-semibold">OCBC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}