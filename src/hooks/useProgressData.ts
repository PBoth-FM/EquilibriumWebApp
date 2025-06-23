import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export type TimePeriod = '7d' | '30d' | '90d' | 'all';

export interface ProgressData {
  sessions: Array<{
    date: string;
    points: number;
    efficiency: number;
    duration: number;
  }>;
  totalSessions: number;
  totalPoints: number;
  avgEfficiency: number;
  totalDuration: number;
  streak: number;
}

export interface ChartData {
  date: string;
  points: number;
  efficiency: number;
  sessions: number;
}

export function useProgressData(period: TimePeriod) {
  const { user } = useAuthStore();
  const [data, setData] = useState<ProgressData | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProgressData() {
      if (!user) {
        setData(null);
        setChartData([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Calculate date range
        let dateFrom = new Date();
        switch (period) {
          case '7d':
            dateFrom.setDate(dateFrom.getDate() - 7);
            break;
          case '30d':
            dateFrom.setDate(dateFrom.getDate() - 30);
            break;
          case '90d':
            dateFrom.setDate(dateFrom.getDate() - 90);
            break;
          case 'all':
            dateFrom = new Date('2020-01-01'); // Far back date
            break;
        }

        // Fetch sessions for the period
        const { data: sessions, error: sessionsError } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', user.id)
          .gte('session_date', dateFrom.toISOString().split('T')[0])
          .order('session_date', { ascending: true });

        if (sessionsError) throw sessionsError;

        // Process sessions data
        const processedSessions = sessions.map(session => ({
          date: session.session_date,
          points: session.points,
          efficiency: session.efficiency_percentage,
          duration: session.duration_seconds
        }));

        // Calculate aggregates
        const totalSessions = sessions.length;
        const totalPoints = sessions.reduce((sum, s) => sum + s.points, 0);
        const totalDuration = sessions.reduce((sum, s) => sum + s.duration_seconds, 0);
        const avgEfficiency = totalSessions > 0 
          ? sessions.reduce((sum, s) => sum + s.efficiency_percentage, 0) / totalSessions 
          : 0;

        // Calculate current streak (simplified)
        const streak = await calculateStreak(user.id);

        setData({
          sessions: processedSessions,
          totalSessions,
          totalPoints,
          avgEfficiency,
          totalDuration,
          streak
        });

        // Prepare chart data (group by date)
        const chartDataMap = new Map<string, { points: number[], efficiency: number[], count: number }>();
        
        sessions.forEach(session => {
          const date = session.session_date;
          if (!chartDataMap.has(date)) {
            chartDataMap.set(date, { points: [], efficiency: [], count: 0 });
          }
          const dayData = chartDataMap.get(date)!;
          dayData.points.push(session.points);
          dayData.efficiency.push(session.efficiency_percentage);
          dayData.count += 1;
        });

        const chartDataArray: ChartData[] = Array.from(chartDataMap.entries()).map(([date, data]) => ({
          date,
          points: Math.round(data.points.reduce((a, b) => a + b, 0) / data.points.length),
          efficiency: Math.round(data.efficiency.reduce((a, b) => a + b, 0) / data.efficiency.length),
          sessions: data.count
        }));

        setChartData(chartDataArray);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch progress data');
      } finally {
        setLoading(false);
      }
    }

    fetchProgressData();
  }, [user, period]);

  return { data, chartData, loading, error };
}

async function calculateStreak(userId: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('user_stats')
      .select('current_streak_days')
      .eq('user_id', userId)
      .single();

    if (error) return 0;
    return data?.current_streak_days || 0;
  } catch {
    return 0;
  }
}