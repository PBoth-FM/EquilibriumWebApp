import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProgressData, TimePeriod } from '../hooks/useProgressData';
import { useAchievements } from '../hooks/useUserData';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Calendar,
  Trophy,
  Flame,
  Play,
  Award
} from 'lucide-react';

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getAchievementIcon(iconName: string, className: string = "w-6 h-6") {
  const icons = {
    trophy: Trophy,
    flame: Flame,
    target: Target,
    play: Play,
    award: Award,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || Trophy;
  return <IconComponent className={className} />;
}

const periodOptions: { value: TimePeriod; label: string }[] = [
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 90 Days' },
  { value: 'all', label: 'All Time' },
];

export default function Progress() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30d');
  const { data, chartData, loading, error } = useProgressData(selectedPeriod);
  const { achievements, loading: achievementsLoading } = useAchievements();

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-neutral-600">Loading your progress...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-700">Error loading progress: {error}</p>
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
                Progress Analytics
              </h1>
              <p className="text-lg text-neutral-600">
                Track your breath training progress and see how your performance improves over time.
              </p>
            </div>

            {/* Time Period Selector */}
            <div className="mt-6 sm:mt-0">
              <div className="flex bg-white rounded-lg border border-neutral-200 p-1">
                {periodOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedPeriod(option.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedPeriod === option.value
                        ? 'bg-gradient-primary text-white'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-violet" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {data?.totalSessions || 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Sessions</p>
              <p className="text-sm text-neutral-500 mt-1">
                {selectedPeriod === 'all' ? 'All time' : periodOptions.find(p => p.value === selectedPeriod)?.label}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-magenta/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-magenta" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {Math.round(data?.avgEfficiency || 0)}%
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Avg Efficiency</p>
              <p className="text-sm text-neutral-500 mt-1">Heart rate pattern</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-orange" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {formatDuration(data?.totalDuration || 0)}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Duration</p>
              <p className="text-sm text-neutral-500 mt-1">Time spent training</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-green" />
                </div>
                <span className="text-2xl font-serif font-bold text-neutral-900">
                  {data?.totalPoints || 0}
                </span>
              </div>
              <p className="text-neutral-600 font-medium">Total Points</p>
              <p className="text-sm text-neutral-500 mt-1">Performance score</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Points Trend */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
                Points Trend
              </h3>
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      tickFormatter={formatDate}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      labelFormatter={(label) => formatDate(label)}
                      formatter={(value, name) => [value, name === 'points' ? 'Points' : 'Efficiency %']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="points" 
                      stroke="#A070FF" 
                      strokeWidth={3}
                      dot={{ fill: '#A070FF', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-300 flex items-center justify-center text-neutral-500">
                  No data available for this period
                </div>
              )}
            </div>

            {/* Efficiency Trend */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
                Efficiency Trend
              </h3>
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      tickFormatter={formatDate}
                    />
                    <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                    <Tooltip 
                      labelFormatter={(label) => formatDate(label)}
                      formatter={(value) => [`${value}%`, 'Efficiency']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#FF5C8A" 
                      strokeWidth={3}
                      dot={{ fill: '#FF5C8A', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-300 flex items-center justify-center text-neutral-500">
                  No data available for this period
                </div>
              )}
            </div>
          </div>

          {/* Session Frequency Chart */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 mb-12">
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
              Session Frequency
            </h3>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={formatDate}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    labelFormatter={(label) => formatDate(label)}
                    formatter={(value) => [value, 'Sessions']}
                  />
                  <Bar 
                    dataKey="sessions" 
                    fill="#FFB13C"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-300 flex items-center justify-center text-neutral-500">
                No data available for this period
              </div>
            )}
          </div>

          {/* Achievements Gallery */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-xl font-serif font-semibold text-neutral-900">
                Your Achievements
              </h3>
              <p className="text-neutral-600 mt-1">
                Badges earned through consistent breath training
              </p>
            </div>
            <div className="p-6">
              {achievementsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-pulse">Loading achievements...</div>
                </div>
              ) : achievements.length === 0 ? (
                <div className="text-center py-8 text-neutral-500">
                  <Trophy className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Complete sessions to unlock achievements!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        {getAchievementIcon(achievement.icon_name, "w-6 h-6 text-white")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-neutral-900 truncate">
                          {achievement.achievement_name}
                        </p>
                        <p className="text-sm text-neutral-600 mt-1">
                          {achievement.achievement_description}
                        </p>
                        <p className="text-xs text-neutral-500 mt-2">
                          Unlocked {new Date(achievement.unlocked_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Demo Data Notice */}
          {data && data.totalSessions > 0 && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Demo Mode:</strong> This progress data is generated for demonstration purposes. 
                Connect your Apple Watch and complete real breath training sessions to see your actual progress analytics here.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}