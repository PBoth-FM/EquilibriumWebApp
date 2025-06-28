import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo textSize="xl" />
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Breath training that works for busy, analytical minds. See your calm in real-time and build a practice that actually sticks.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/107569057"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:support@equilibrium.app"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © 2025 Equilibrium. All rights reserved.
            </div>
            
            {/* Links */}
            <div className="flex items-center space-x-6 text-neutral-400 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-4">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm text-center">
              © 2025 Equilibrium. All rights reserved.
            </div>
            
            {/* Links */}
            <div className="flex items-center justify-center space-x-6 text-neutral-400 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}