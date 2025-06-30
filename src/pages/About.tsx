import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Target, Mail, MapPin, Globe } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate('/coming-soon');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-6">
              About Equilibrium
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're on a mission to make meditation accessible and effective for busy, analytical minds through real-time biofeedback technology.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-primary-violet" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Our Mission
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p>
                Traditional meditation often feels abstract and unclear - you're left wondering if you're "doing it right." We believe everyone deserves clear guidance to achieve calm, especially busy professionals who think analytically.
              </p>
              
              <p>
                Equilibrium bridges the gap between ancient mindfulness practices and modern technology, giving you real-time feedback about your nervous system so you can see your progress and build confidence in your practice.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-magenta/10 rounded-xl flex items-center justify-center mr-4">
                <Heart className="w-5 h-5 text-primary-magenta" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Science-Based Approach
                </h3>
                <p className="text-neutral-700">
                  Every feature in Equilibrium is grounded in 30+ years of heart rate variability research from institutions like Stanford University and HeartMath Institute.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Privacy First
                </h3>
                <p className="text-neutral-700">
                  Your health data belongs to you. We use industry-leading encryption and give you complete control over how your information is used.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Accessible Wellness
                </h3>
                <p className="text-neutral-700">
                  Meditation shouldn't require special training or years of practice. Our technology makes the benefits immediately accessible to everyone.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Continuous Innovation
                </h3>
                <p className="text-neutral-700">
                  We're constantly improving our algorithms and user experience based on the latest research and user feedback.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-5 h-5 text-primary-orange" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Our Team
              </h2>
            </div>

            <div className="bg-gradient-primary p-8 rounded-3xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Built by wellness enthusiasts and technology experts
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our team combines deep expertise in neuroscience, software engineering, and user experience design. We're passionate about making wellness technology that actually works for busy people.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white/90 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Distributed team across multiple time zones
              </div>
            </div>
          </section>

          {/* Research & Development */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-primary-green" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Research & Development
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p>
                Equilibrium is built on decades of scientific research into heart rate variability, biofeedback, and meditation. Our algorithms are continuously refined based on:
              </p>
              
              <ul className="space-y-2 text-neutral-700 mt-4">
                <li>• Peer-reviewed studies from leading research institutions</li>
                <li>• User feedback and real-world usage patterns</li>
                <li>• Collaboration with wellness experts and researchers</li>
                <li>• Ongoing validation studies to ensure effectiveness</li>
              </ul>

              <p>
                We believe technology should enhance human potential, not complicate it. Every decision we make is guided by the question: "Does this help people achieve calm more effectively?"
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-neutral-600">
                  We'd love to hear from you. Whether you have questions, feedback, or just want to say hello.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">General Inquiries</h3>
                  <a 
                    href="mailto:contact@equilibrium.app"
                    className="text-primary-violet hover:text-primary-magenta transition-colors font-medium"
                  >
                    contact@equilibrium.app
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Support</h3>
                  <a 
                    href="mailto:support@equilibrium.app"
                    className="text-primary-violet hover:text-primary-magenta transition-colors font-medium"
                  >
                    support@equilibrium.app
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-primary p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Ready to transform your stress response?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who've discovered the power of real-time breath training.
              </p>
              <button 
                onClick={handleDownloadClick}
                className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Download Equilibrium
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}