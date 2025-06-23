import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Google",
    content: "I could never stay focused on meditating before Equilibrium. Now I can actually see when I'm doing it right - it's finally made meditation click for me.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    content: "As someone who lives in spreadsheets, I love that Equilibrium gives me data on my progress. My breathing sessions went from scattered to consistent, and I can actually track my improvement.",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Dr. Emily Watson",
    role: "Emergency Medicine Physician",
    content: "Working 12-hour shifts in the ER, I needed something that actually worked to manage stress. Equilibrium's approach is based on real science, and I can feel the difference in my stress response.",
    rating: 5,
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "4.8★", label: "App Store Rating" },
  { number: "85%", label: "Report Better Focus" },
  { number: "73%", label: "Reduce Stress Levels" }
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Join thousands of busy professionals who found their calm
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            From Fortune 500 executives to startup founders, busy professionals choose Equilibrium to get a clear guide to achieve calm and build lasting breath training habits.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
              {/* Small accent dot */}
              <div className="w-1 h-1 bg-gradient-primary rounded-full mx-auto mt-2 opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-6 h-6 text-neutral-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-neutral-50 p-12 rounded-3xl border border-neutral-100">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Ready to transform your stress response?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join the thousands of professionals who've already discovered the power of real-time breath training.
            </p>
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}