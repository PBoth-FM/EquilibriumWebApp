import React from 'react';
import { Zap, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: "See your calm in real-time - no guesswork, just results",
    description: "Watch your heart rate variability change as you breathe and focus. Clear, immediate feedback shows you exactly when you're achieving a calm, focused state.",
    gradient: "from-primary-violet to-primary-magenta"
  },
  {
    icon: Target,
    title: "Gamified with points and achievements to build lasting habits",
    description: "Earn points for consistent practice, unlock achievements for milestones, and track your progress with detailed analytics that keep you motivated.",
    gradient: "from-primary-magenta to-primary-orange"
  },
  {
    icon: BookOpen,
    title: "Based on 30+ years of research",
    description: "Built on decades of scientific research from institutions like Stanford University and HeartMath Institute. This isn't just meditation - it's measurable nervous system training.",
    gradient: "from-primary-orange to-primary-green"
  }
];

export default function ValuePropositions() {
  return (
    <section id="how-it-works" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Why Equilibrium works where traditional meditation fails
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Unlike traditional meditation apps that rely on guesswork, Equilibrium gives you real-time data about your breathing and nervous system, making it impossible to practice wrong.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center lg:text-left animate-slide-up bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-sm transition-all duration-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-50 mb-6 group-hover:shadow-sm transition-shadow duration-200">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-neutral-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className={`h-1 w-0 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 group-hover:w-full transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div>
            <Link 
              to="/coming-soon"
              className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Try Equilibrium Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}