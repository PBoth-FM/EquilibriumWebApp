import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Heart, 
  Brain, 
  Activity, 
  Watch, 
  BookOpen, 
  Target, 
  Zap,
  CheckCircle,
  Play,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react';

export default function Learn() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Master the Science of Calm and Focus
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover how breath training transforms your nervous system and unlocks your full potential through decades of scientific research.
            </p>
          </div>

          {/* How It Works Section */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-5 h-5 text-primary-violet" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                How Equilibrium's Breath Training Works
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-12">
              <p>
                Equilibrium uses your breathing pattern to train your nervous system for optimal performance. Unlike traditional meditation that relies on guesswork, our approach gives you real-time data about your body's stress response, making it impossible to practice wrong.
              </p>
              
              <p>
                Here's the science: Your heart rate naturally varies with each beat - this variation reflects the balance between your sympathetic (stress) and parasympathetic (recovery) nervous systems. When you breathe in a specific rhythm, these systems harmonize into what researchers call "heart rate variability" - a state of peak mental and emotional performance.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-violet to-primary-magenta rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Watch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  1. Measure
                </h3>
                <p className="text-neutral-600">
                  Your Apple Watch continuously monitors heart rate variability through advanced sensors, capturing thousands of data points per session.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-magenta to-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  2. Analyze
                </h3>
                <p className="text-neutral-600">
                  Our algorithms analyze your breathing patterns in real-time, identifying moments of optimal heart rate variability and providing instant feedback.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  3. Train
                </h3>
                <p className="text-neutral-600">
                  Through guided breathing exercises and real-time feedback, you learn to consciously influence your nervous system and achieve calm states on demand.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
              <h4 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                The Science Behind Heart Rate Variability
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                When you achieve optimal heart rate variability through rhythmic breathing, your heart rhythm pattern becomes smooth and wave-like. This state enhances cognitive function, emotional stability, and decision-making while reducing stress hormones like cortisol. Studies show that just 10 minutes of HRV training can improve focus and performance for hours afterward.
              </p>
            </div>
          </section>

          {/* Research Section */}
          <section id="research-section" className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-magenta/10 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-primary-magenta" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                30+ Years of Scientific Research
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-12">
              <p>
                Our breath training approach isn't new-age wellness - it's backed by over three decades of peer-reviewed research from institutions like Stanford University, Harvard Medical School, and the U.S. Military.
              </p>
            </div>

            {/* Research Highlights */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Stanford University Study (2023)
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Daily 5-minute breathing exercises produced improvements in mood and reduced physiological arousal. Participants showed enhanced positive affect over one month of practice.<sup className="text-primary-violet ml-1">1,2</sup>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <Brain className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Harvard Medical School Research
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Eight-week meditation programs produced measurable changes in brain regions associated with memory, self-awareness, empathy, and stress. Brain scans showed structural improvements in stress response.<sup className="text-primary-violet ml-1">3,4</sup>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Military Performance Study
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      U.S. Army soldiers trained in HRV breath training showed improved decision-making under pressure and reduced PTSD symptoms.<sup className="text-primary-violet ml-1">5,6</sup>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <Brain className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Cognitive Enhancement Research
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Studies show HRV training increases working memory, attention span, and executive function in as little as 4 weeks of practice.<sup className="text-primary-violet ml-1">7,8</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnotes */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h5 className="text-sm font-semibold text-neutral-700 mb-3">References</h5>
              <div className="space-y-2 text-xs text-neutral-600">
                <p>
                  <sup className="text-primary-violet mr-1">1</sup>
                  <a 
                    href="https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(22)00474-8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Cell Reports Medicine (2023): "Brief structured respiration practices enhance mood and reduce physiological arousal"
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">2</sup>
                  <a 
                    href="https://www.inc.com/jeff-haden/stanford-neuroscientist-this-5-second-breathing-technique-is-fastest-way-to-reduce-anxiety-stress.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Inc. Magazine: "Stanford Neuroscientist: This 5-Second Breathing Technique..."
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">3</sup>
                  <a 
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5575449/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Psychiatry Research: Neuroimaging (2011): Mindfulness practice leads to increases in regional brain gray matter density
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">4</sup>
                  <a 
                    href="https://news.harvard.edu/gazette/story/2011/01/eight-weeks-to-a-better-brain/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Harvard Gazette: "Eight weeks to a better brain"
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">5</sup>
                  <a 
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6751385/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Military Medicine (2018): Heart Rate Variability and Cognitive Bias Feedback Interventions to Prevent Post-deployment PTSD: Results from a Randomized Controlled Trial
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">6</sup>
                  <a 
                    href="https://www.sciencedaily.com/releases/2018/06/180621111955.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Science Daily: "Changes in stress after meditation"
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">7</sup>
                  <a 
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8924557/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Cureus (2022): "Effect of Resonance Breathing on Heart Rate Variability and Cognitive Functions in Young Adults"
                  </a>
                </p>
                <p>
                  <sup className="text-primary-violet mr-1">8</sup>
                  <a 
                    href="https://www.sciencedaily.com/releases/2018/06/180621111955.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-violet transition-colors"
                  >
                    Applied Psychophysiology and Biofeedback (2015): "A RCT Comparing Daily Mindfulness Meditations, Biofeedback Exercises, and Daily Physical Exercise on Attention Control, Executive Functioning..."
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-gradient-primary p-8 rounded-2xl text-white text-center mt-8">
              <h4 className="text-xl font-serif font-semibold mb-4">
                Key Research Finding
              </h4>
              <p className="text-white/90 text-lg">
                "Optimal heart rhythms, achieved through breath training, create a cascade of neural, hormonal, and biochemical events that enhance cognitive function and emotional stability."
              </p>
              <p className="text-white/70 text-sm mt-4">
                — Harvard Medical School Research Center
              </p>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center mr-4">
                <Play className="w-5 h-5 text-primary-orange" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Getting Started with Equilibrium
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-8">
              <p>
                Starting your breath training journey is simple. Follow these steps to begin transforming your stress response and optimizing your mental performance.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Set Up Your Apple Watch
                  </h4>
                  <p className="text-neutral-600">
                    Ensure your Apple Watch (Series 4 or newer) is properly fitted and connected. The heart rate sensor needs consistent skin contact for accurate readings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8  bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Find Your Quiet Space
                  </h4>
                  <p className="text-neutral-600">
                    Choose a quiet, comfortable location where you won't be interrupted. You can sit in a chair or on the floor - whatever feels most natural.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Start Your First Session
                  </h4>
                  <p className="text-neutral-600">
                    Begin with 5-minute sessions. Focus on slow, rhythmic breathing while watching your efficiency score in real-time. Don't worry about "getting it right" - your nervous system will learn.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Build Your Practice
                  </h4>
                  <p className="text-neutral-600">
                    Consistency beats intensity. Practice daily, even if just for 3-5 minutes. Your efficiency scores will improve as your nervous system adapts to the training.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
              <h4 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                Pro Tips for Success
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Morning Practice</p>
                    <p className="text-neutral-600 text-sm">Train first thing in the morning to set a calm tone for your entire day.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Focus on Breathing</p>
                    <p className="text-neutral-600 text-sm">Breathe at about 5 seconds in, 5 seconds out (6 breaths per minute) for optimal heart rate variability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Stay Relaxed</p>
                    <p className="text-neutral-600 text-sm">Don't force it. Optimal heart rate variability happens naturally as you maintain calm, rhythmic breathing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Track Progress</p>
                    <p className="text-neutral-600 text-sm">Use the progress dashboard to see your improvement over time and stay motivated.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-primary-green" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Optimize Your Practice
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                  Do's
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Practice at the same time daily to build a routine</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Focus on smooth, rhythmic breathing patterns</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Use breath training before important meetings or decisions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Celebrate small improvements in your efficiency scores</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                  Avoid
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Training immediately after caffeine or heavy meals</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Forcing breathing patterns - let them develop naturally</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Practicing when extremely stressed or agitated</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                    <p className="text-neutral-700">Skipping practice for more than 2-3 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-primary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Transform your stress response and unlock peak performance with scientifically-proven breath training.
                </p>
                <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Open Apple Watch App
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}