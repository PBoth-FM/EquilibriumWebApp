import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ValuePropositions from '../components/ValuePropositions';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
      </main>
      <Footer />
    </div>
  );
}