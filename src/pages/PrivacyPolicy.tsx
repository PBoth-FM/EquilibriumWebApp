import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Shield, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center space-x-6 text-neutral-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Effective Date: 6/26/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Last Updated: 6/26/2025</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Introduction</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Equilibrium ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our biofeedback meditation app and related services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Information We Collect</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Health and Biometric Data</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Heart Rate Data:</strong> Real-time heart rate measurements from your Apple Watch during meditation sessions</li>
                  <li><strong>Heart Rate Variability (HRV):</strong> Calculated from your heart rate data to provide biofeedback</li>
                  <li><strong>Session Data:</strong> Meditation session duration, points earned, breathing patterns, and efficiency metrics</li>
                  <li><strong>Workout Information:</strong> Session records stored in Apple HealthKit</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Account and Profile Information</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Account Details:</strong> Email address, username, profile photo (optional)</li>
                  <li><strong>App Preferences:</strong> Session settings, notification preferences, goal configurations</li>
                  <li><strong>Authentication Data:</strong> Securely hashed passwords and session tokens managed by Supabase</li>
                  <li><strong>Anonymous Usage:</strong> Guest users can use the app without creating an account (limited functionality)</li>
                  <li><strong>Social Authentication:</strong> Optional login via Google, Apple, or Facebook (when implemented)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Usage Analytics (Optional - Requires Your Consent)</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>App Performance:</strong> Crash reports, feature usage, session completion rates</li>
                  <li><strong>Device Information:</strong> Device model, operating system version, app version</li>
                  <li><strong>Usage Patterns:</strong> Time spent in app, feature interactions (aggregated and anonymized)</li>
                  <li><strong>Data Collection:</strong> Analytics disabled by default and only enabled after you grant explicit consent</li>
                  <li><strong>No Personal Information:</strong> We never collect personally identifiable information (emails, names) in analytics data</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Technical Data</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Apple Watch Connectivity:</strong> Connection status and battery level for optimal user experience (no data stored on Apple Watch)</li>
                  <li><strong>iPhone Storage:</strong> Session history, achievements, and preferences stored locally on your iPhone with file protection</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">How We Use Your Information</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Primary App Functions</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Real-time Biofeedback:</strong> Process heart rate data to display HRV waveforms and calculate meditation scores</li>
                  <li><strong>Progress Tracking:</strong> Store session history, calculate streaks, and unlock achievements</li>
                  <li><strong>Personalization:</strong> Customize session recommendations and goal setting based on your usage patterns</li>
                  <li><strong>Cloud Synchronization:</strong> Backup and sync your data across devices for seamless experience</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Service Improvement (With Your Consent)</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Optional Analytics:</strong> If you choose to enable analytics, we understand how users interact with the app to improve features and user experience</li>
                  <li><strong>Performance Monitoring:</strong> Identify and fix technical issues, optimize app performance (requires analytics consent)</li>
                  <li><strong>Research (Optional):</strong> Analyze aggregated, anonymized data to improve biofeedback algorithms</li>
                  <li><strong>No Analytics Required:</strong> Core app functionality works fully without enabling analytics</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Account Management</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Authentication:</strong> Secure login and account access across devices</li>
                  <li><strong>Customer Support:</strong> Respond to inquiries and provide technical assistance</li>
                  <li><strong>Service Communications:</strong> Send important service updates and security notifications</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing and Disclosure */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Data Sharing and Disclosure</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">No Sale of Personal Data</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Service Providers</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may share data with trusted third-party service providers who assist in operating our app:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Supabase:</strong> User authentication, account management, and secure data storage infrastructure</li>
                  <li><strong>Firebase (Google):</strong> Optional analytics and crash reporting (disabled by default, requires user consent, no personally identifiable information collected, data stored in US)</li>
                  <li><strong>Payment Processors:</strong> Subscription billing and payment processing (payment information only)</li>
                  <li><strong>Social Authentication Providers:</strong> Google, Apple, and Facebook for optional social login (when implemented)</li>
                  <li><strong>AI/ML Services:</strong> Enhanced data analysis for improved biofeedback algorithms (when implemented)</li>
                  <li><strong>Customer Support Platforms:</strong> Technical assistance and user support (when implemented)</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  All service providers are contractually bound to protect your data and use it only for specified purposes.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Research and Analytics</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated health data for research purposes to advance understanding of meditation and biofeedback</li>
                  <li><strong>No Individual Identification:</strong> Research data cannot be traced back to individual users</li>
                  <li><strong>Opt-out Available:</strong> You can opt out of research data sharing in app settings</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Legal Requirements</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We may disclose information when required by law, to protect our rights, or to ensure user safety.
                </p>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Data Storage and Security</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Storage Locations</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Health Data:</strong> Stored in Apple HealthKit on your iPhone and securely backed up to our encrypted cloud servers</li>
                  <li><strong>Account Data:</strong> Securely stored on our cloud servers with industry-standard encryption</li>
                  <li><strong>Local Data:</strong> Session history and preferences stored locally on your iPhone only (not stored on Apple Watch)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Security Measures</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Encryption in Transit:</strong> All data transmission uses TLS 1.3 encryption</li>
                  <li><strong>iPhone Storage Protection:</strong> Session data files protected using iOS Data Protection with complete file protection</li>
                  <li><strong>Cloud Encryption:</strong> Server-stored data encrypted at rest using industry-standard AES-256 encryption</li>
                  <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
                  <li><strong>Secure Communication:</strong> All data transmission between Apple Watch and iPhone automatically encrypted using Apple's secure WatchConnectivity framework</li>
                  <li><strong>Authentication Security:</strong> Login credentials, session tokens, and API keys stored in iOS Keychain with automatic encryption</li>
                  <li><strong>Regular Security Audits:</strong> Ongoing monitoring and security assessments</li>
                </ul>
              </div>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Your Privacy Rights</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Access and Control</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Account Settings:</strong> Modify personal information, preferences, and privacy settings</li>
                  <li><strong>Data Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Session History:</strong> View all your meditation sessions and progress data</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">Regional Rights</h3>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mb-4">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">For EU Residents (GDPR):</h4>
                  <ul className="space-y-1 text-neutral-700 text-sm">
                    <li>• Right to data portability (export your data)</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to object to processing</li>
                    <li>• Right to lodge complaints with supervisory authorities</li>
                    <li>• Right to be forgotten (account deletion)</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">For California Residents (CCPA):</h4>
                  <ul className="space-y-1 text-neutral-700 text-sm">
                    <li>• Right to know what personal information is collected</li>
                    <li>• Right to delete personal information</li>
                    <li>• Right to opt-out of sale (note: we do not sell personal information)</li>
                    <li>• Right to non-discrimination for exercising privacy rights</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Apple HealthKit Integration */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Apple HealthKit Integration</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">HealthKit Data Handling</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Direct Access:</strong> We access heart rate data directly from Apple HealthKit with your permission</li>
                  <li><strong>User Control:</strong> You control all HealthKit permissions through iOS Settings</li>
                  <li><strong>Local Processing:</strong> Most health data processing occurs locally on your device</li>
                  <li><strong>Apple's Policies:</strong> HealthKit data handling also governed by Apple's privacy policies</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">HealthKit Data Restrictions</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• HealthKit data cannot be used for advertising or marketing purposes</li>
                  <li>• HealthKit data cannot be shared with third parties without explicit consent</li>
                  <li>• We store HealthKit data on our servers only for essential app functionality (biofeedback, progress tracking, cloud sync)</li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Children's Privacy</h2>
              <p className="text-neutral-700 leading-relaxed">
                Equilibrium is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover such data has been collected, we will delete it immediately and terminate the associated account.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Contact Us</h2>
              <div className="bg-gradient-primary p-8 rounded-2xl text-white">
                <h3 className="text-xl font-serif font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>Privacy Officer: </span>
                    <a 
                      href="mailto:privacy@equilibrium.app"
                      className="ml-2 font-medium hover:text-white/80 transition-colors underline"
                    >
                      privacy@equilibrium.app
                    </a>
                  </div>
                  <p className="text-white/90 text-sm">Response Time: We respond to privacy inquiries within 7 business days.</p>
                  <p className="text-white/90 text-sm">Support: For technical support unrelated to privacy, use the in-app contact feature.</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Data Subject Requests</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  When contacting us about privacy matters, please include:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Your registered email address</li>
                  <li>• Specific nature of your request</li>
                  <li>• Any relevant account information (without passwords)</li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 italic">
                This privacy policy is designed to be transparent and user-friendly. If you have questions about any section, please contact us at{' '}
                <a 
                  href="mailto:privacy@equilibrium.app"
                  className="text-primary-violet hover:text-primary-magenta transition-colors"
                >
                  privacy@equilibrium.app
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