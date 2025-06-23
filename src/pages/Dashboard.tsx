import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useUserStats, useRecentSessions, useAchievements } from '../hooks/useUserData';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Zap, TrendingUp, Target, Calendar, Trophy, Play, Flame } from 'lucide-react';

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return `Today ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (diffDays === 1) {
    return `Yesterday ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else {
    return `${diffDays} days ago`;
  }
}

function getAchievementIcon(iconName: string) {
  const icons = {
    trophy: Trophy,
    flame: Flame,
    target: Target,
    play: Play,
  };
  return icons[iconName as keyof typeof icons] || Trophy;
}

export default function Dashboard() {
  const { user } = useAuthStore();
  const { stats, loading: statsLoading, error: statsError } = useUserStats();
  const { sessions, loading: sessionsLoading, error: sessionsError } = useRecentSessions(3);
  const { achievements, loading: achievementsLoading } = useAchievements();

  if (statsLoading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-neutral-600">Loading your dashboard...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (statsError) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-700">Error loading dashboard: {statsError}</p>
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
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Welcome back, {user?.user_metadata?.full_name || 'there'}!
            </h1>
            <p className="text-lg text-neutral-600">
              Ready to continue your breath training? Here's your progress at a glance.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-violet" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {stats?.current_streak_days || 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Day Streak</p>
              <p className="text-sm text-neutral-500 mt-1">Keep it going!</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-magenta/10 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-magenta" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {stats?.total_sessions || 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Sessions</p>
              <p className="text-sm text-neutral-500 mt-1">Since you started</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-orange" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {Math.round(stats?.average_efficiency || 0)}%
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Average Efficiency</p>
              <p className="text-sm text-neutral-500 mt-1">Last 30 days</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-green" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {stats?.total_points || 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Points</p>
              <p className="text-sm text-neutral-500 mt-1">All time</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-primary p-8 rounded-3xl text-white text-center mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Ready for your next session?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Open the Equilibrium app on your Apple Watch to start a new breath training session and continue building your streak.
            </p>
            <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Open App to Start Session
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Recent Sessions */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="p-6 border-b border-neutral-200">
                <h3 className="text-xl font-serif font-semibold text-neutral-900">
                  Recent Sessions
                </h3>
                <p className="text-neutral-600 mt-1">
                  Your latest breath training sessions
                </p>
              </div>
              <div className="divide-y divide-neutral-200">
                {sessionsLoading ? (
                  <div className="p-6 text-center">
                    <div className="animate-pulse">Loading sessions...</div>
                  </div>
                ) : sessionsError ? (
                  <div className="p-6 text-center text-red-600">
                    Error loading sessions
                  </div>
                ) : sessions.length === 0 ? (
                  <div className="p-6 text-center text-neutral-500">
                    No sessions yet. Start your first session to see your progress here!
                  </div>
                ) : (
                  sessions.map((session) => (
                    <div key={session.id} className="p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                      <div>
                        <p className="font-medium text-neutral-900">
                          {formatDate(session.created_at)}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {formatDuration(session.duration_seconds)} • {session.efficiency_percentage}% efficiency
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-serif font-bold text-primary-violet">
                          {session.points} points
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="p-6 border-b border-neutral-200">
                <h3 className="text-xl font-serif font-semibold text-neutral-900">
                  Recent Achievements
                </h3>
                <p className="text-neutral-600 mt-1">
                  Your latest unlocked badges
                </p>
              </div>
              <div className="divide-y divide-neutral-200">
                {achievementsLoading ? (
                  <div className="p-6 text-center">
                    <div className="animate-pulse">Loading achievements...</div>
                  </div>
                ) : achievements.length === 0 ? (
                  <div className="p-6 text-center text-neutral-500">
                    Complete sessions to unlock achievements!
                  </div>
                ) : (
                  achievements.slice(0, 3).map((achievement) => {
                    const IconComponent = getAchievementIcon(achievement.icon_name);
                    return (
                      <div key={achievement.id} className="p-6 flex items-center hover:bg-neutral-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-neutral-900">
                            {achievement.achievement_name}
                          </p>
                          <p className="text-sm text-neutral-600">
                            {achievement.achievement_description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">Learn More</h4>
              <p className="text-neutral-600 text-sm mb-4">
                Discover the science behind breath training and tips to improve your practice.
              </p>
              <Link 
                to="/learn"
                className="text-primary-violet font-medium hover:text-primary-magenta transition-colors"
              >
                Explore Learn Section →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold text-neutral-900 mb-2">View Progress</h4>
              <p className="text-neutral-600 text-sm mb-4">
                Dive deeper into your analytics with detailed charts and achievements.
              </p>
              <Link 
                to="/progress"
                className="text-primary-violet font-medium hover:text-primary-magenta transition-colors"
              >
                View Progress Dashboard →
              </Link>
            </div>
          </div>

          {/* Demo Data Notice */}
          {stats && stats.total_sessions > 0 && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Demo Mode:</strong> This dashboard is showing sample breath training data for demonstration purposes. 
                Connect your Apple Watch and start real sessions to see your actual progress here.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}