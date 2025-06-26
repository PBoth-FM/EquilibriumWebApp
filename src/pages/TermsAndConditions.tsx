import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Scale, Clock } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center space-x-6 text-neutral-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Last Updated: June 26, 2025</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Agreement to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">1. Agreement to Terms</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                By downloading, installing, or using the Equilibrium app ("App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
              </p>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">Contact Information:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Email: support@equilibrium.app</li>
                  <li>• For terms-related questions: legal@equilibrium.app</li>
                </ul>
              </div>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">2. Service Description</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Equilibrium is a wellness and performance optimization app that provides biofeedback-based breathing training. The App uses heart rate data from your Apple Watch to help you achieve calm and focus through guided breathing exercises.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">What Equilibrium Does:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Real-time heart rate variability (HRV) biofeedback during breathing sessions</li>
                    <li>• Gamified progress tracking with points, streaks, and achievements</li>
                    <li>• Personalized session recommendations and goal setting</li>
                    <li>• Data synchronization across your devices</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">What Equilibrium Is Not:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• A medical device or diagnostic tool</li>
                    <li>• A substitute for professional medical care or mental health treatment</li>
                    <li>• Intended to diagnose, treat, cure, or prevent any medical condition</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eligibility and Account Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">3. Eligibility and Account Requirements</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Age Requirements:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• You must be at least 13 years old to use Equilibrium</li>
                    <li>• Users between 13-17 must have parental consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Device Requirements:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Compatible iPhone with iOS 15.0 or later</li>
                    <li>• Apple Watch Series 3 or later with watchOS 8.0 or later</li>
                    <li>• Active internet connection for account creation and data synchronization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Account Creation:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• You must provide a valid email address</li>
                    <li>• You are responsible for maintaining the security of your account credentials</li>
                    <li>• One account per person; account sharing is prohibited</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Subscription Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">4. Subscription Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Subscription Model:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Equilibrium operates on an annual subscription basis</li>
                    <li>• Current pricing: $9.99 per year (subject to change with notice)</li>
                    <li>• All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Free Trial:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• New users receive a 30-day free trial with full app functionality</li>
                    <li>• Trial begins when you create your account</li>
                    <li>• You may cancel anytime during the trial without charge</li>
                    <li>• If you don't cancel, your subscription automatically begins after the trial period</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Auto-Renewal:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Subscriptions automatically renew annually unless cancelled</li>
                    <li>• Your payment method will be charged 24 hours before renewal</li>
                    <li>• You can cancel auto-renewal anytime in your device's subscription settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Payment:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Payment processed through Apple App Store</li>
                    <li>• Subject to Apple's payment terms and policies</li>
                    <li>• We do not store your payment information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Health and Wellness Disclaimers */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">7. Health and Wellness Disclaimers</h2>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">⚠️ Important Health Notice</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Not Medical Advice:</h4>
                    <ul className="space-y-1 text-neutral-700 text-sm">
                      <li>• Equilibrium provides wellness and stress management tools, not medical advice</li>
                      <li>• Content is for informational and educational purposes only</li>
                      <li>• Always consult qualified healthcare professionals for medical concerns</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Use at Your Own Risk:</h4>
                    <ul className="space-y-1 text-neutral-700 text-sm">
                      <li>• You assume all risks associated with using biofeedback and breathing exercises</li>
                      <li>• Stop using the app if you experience discomfort or adverse effects</li>
                      <li>• The app is not suitable for emergency situations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Pre-existing Conditions:</h4>
                    <p className="text-neutral-700 text-sm mb-2">
                      Consult your healthcare provider before using Equilibrium if you have:
                    </p>
                    <ul className="space-y-1 text-neutral-700 text-sm">
                      <li>• Heart conditions or cardiovascular disease</li>
                      <li>• Respiratory conditions</li>
                      <li>• Anxiety disorders or panic disorders</li>
                      <li>• Any condition that affects breathing or heart rate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Ownership */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">8. Data Ownership and Usage Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Your Data:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• You own all personal data you provide and generate through the app</li>
                    <li>• You grant us permission to process your data as described in our Privacy Policy</li>
                    <li>• You can request deletion of your account and data at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Our Rights:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• We own the app, algorithms, and all proprietary technology</li>
                    <li>• We may use aggregated, anonymized data for research and service improvement</li>
                    <li>• We retain rights to improve our algorithms based on usage patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">12. Limitation of Liability</h2>
              
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Important Legal Disclaimers:</h3>
                <div className="space-y-4 text-neutral-700">
                  <div>
                    <h4 className="font-semibold mb-2">Disclaimer of Warranties:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• The app is provided "as is" without warranties of any kind</li>
                      <li>• We disclaim all warranties, express or implied, including merchantability and fitness for purpose</li>
                      <li>• No warranty that the app will meet your requirements or be error-free</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Limitation of Damages:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Our liability is limited to the amount you paid for the subscription in the past 12 months</li>
                      <li>• We are not liable for indirect, incidental, or consequential damages</li>
                      <li>• This includes lost profits, data loss, or business interruption</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Health-Related Limitations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• We are not liable for any health outcomes or medical decisions</li>
                      <li>• You assume all risks related to wellness and breathing exercises</li>
                      <li>• No liability for Apple Watch sensor accuracy or connectivity issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Apple App Store Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">16. Apple App Store Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Additional Terms:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Your use is also subject to Apple's App Store Terms of Service</li>
                    <li>• Apple is not responsible for the app or any related services</li>
                    <li>• Apple has no warranty or support obligations for Equilibrium</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">HealthKit Integration:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• HealthKit data used only for app functionality as described</li>
                    <li>• HealthKit data not used for advertising or marketing</li>
                    <li>• You control HealthKit permissions through iOS Settings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Geographic Availability */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">15. Geographic Availability and Governing Law</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Service Availability:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Equilibrium is available worldwide through app stores</li>
                    <li>• Some features may not be available in all regions</li>
                    <li>• We reserve the right to restrict availability in certain jurisdictions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Governing Law:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• These Terms are governed by the laws of Washington State, USA</li>
                    <li>• Disputes resolved in Washington State courts</li>
                    <li>• You consent to jurisdiction in Washington State</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">20. Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Contact Addresses:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-neutral-600" />
                      <div>
                        <span className="font-medium">General Support:</span>
                        <a 
                          href="mailto:support@equilibrium.app"
                          className="block text-primary-violet hover:text-primary-magenta transition-colors"
                        >
                          support@equilibrium.app
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-neutral-600" />
                      <div>
                        <span className="font-medium">Legal/Terms Questions:</span>
                        <a 
                          href="mailto:legal@equilibrium.app"
                          className="block text-primary-violet hover:text-primary-magenta transition-colors"
                        >
                          legal@equilibrium.app
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-neutral-600" />
                      <div>
                        <span className="font-medium">Privacy Matters:</span>
                        <a 
                          href="mailto:privacy@equilibrium.app"
                          className="block text-primary-violet hover:text-primary-magenta transition-colors"
                        >
                          privacy@equilibrium.app
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Response Times:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• General support: 5 business days</li>
                    <li>• Legal inquiries: 10 business days</li>
                    <li>• Privacy requests: 7 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Version Information */}
            <div className="bg-neutral-100 p-6 rounded-2xl border border-neutral-200 mb-8">
              <div className="text-center">
                <p className="text-neutral-700 mb-2">
                  <strong>Last Updated:</strong> June 26, 2025<br />
                  <strong>Effective Date:</strong> June 26, 2025<br />
                  <strong>Version:</strong> 1.0
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 italic">
                These Terms & Conditions are designed to be fair and transparent. If you have questions about any section, please contact us at{' '}
                <a 
                  href="mailto:legal@equilibrium.app"
                  className="text-primary-violet hover:text-primary-magenta transition-colors"
                >
                  legal@equilibrium.app
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}