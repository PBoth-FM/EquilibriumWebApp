import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Copyright */}
          <div className="text-neutral-400 text-sm">
            © 2025 Equilibrium. All rights reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-neutral-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-3">
          {/* Copyright */}
          <div className="text-neutral-400 text-sm text-center">
            © 2025 Equilibrium. All rights reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center justify-center space-x-6 text-neutral-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}