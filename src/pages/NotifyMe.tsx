import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEmailSignups } from '../hooks/useEmailSignup';
import { Mail, Users, Clock, Download } from 'lucide-react';

export default function NotifyMe() {
  const { signups, loading, error, fetchSignups } = useEmailSignups();

  useEffect(() => {
    fetchSignups();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportEmails = () => {
    const emailList = signups.map(signup => signup.email).join('\n');
    const blob = new Blob([emailList], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `equilibrium-email-signups-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-neutral-600">Loading email signups...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
                Email Signups
              </h1>
              <p className="text-lg text-neutral-600">
                Users who want to be notified when Equilibrium launches
              </p>
            </div>

            {signups.length > 0 && (
              <div className="mt-6 sm:mt-0">
                <button
                  onClick={exportEmails}
                  className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Emails
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-violet" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {signups.length}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Signups</p>
              <p className="text-sm text-neutral-500 mt-1">People waiting for launch</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-magenta/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-magenta" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {signups.length > 0 ? Math.ceil((Date.now() - new Date(signups[signups.length - 1].created_at).getTime()) / (1000 * 60 * 60 * 24)) : 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Days Since First</p>
              <p className="text-sm text-neutral-500 mt-1">First signup</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-orange" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {signups.filter(signup => {
                    const signupDate = new Date(signup.created_at);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return signupDate >= today;
                  }).length}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Today</p>
              <p className="text-sm text-neutral-500 mt-1">Signups today</p>
            </div>
          </div>

          {/* Email List */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-xl font-serif font-semibold text-neutral-900">
                All Email Signups
              </h3>
              <p className="text-neutral-600 mt-1">
                Chronological list of all email addresses
              </p>
            </div>

            {error ? (
              <div className="p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">Error loading signups: {error}</p>
                </div>
              </div>
            ) : signups.length === 0 ? (
              <div className="p-12 text-center text-neutral-500">
                <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No email signups yet</p>
              </div>
            ) : (
              <div className="divide-y divide-neutral-200">
                {signups.map((signup, index) => (
                  <div key={signup.id} className="p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">
                          {signup.email}
                        </p>
                        <p className="text-sm text-neutral-500">
                          Signed up {formatDate(signup.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}