---
title: "Equilibrium Breath Training App - Website PRD"
version: "2.0"
date: "2025-01-27"
---

# Product Requirements Document: Equilibrium Website

## Overview
```yaml
product: Equilibrium Website
purpose: Marketing website and user dashboard for breath training app
target_users: Busy professionals who want a clear guide to achieve calm
tech_stack: React, TypeScript, Tailwind CSS, Supabase
positioning: Breath training that works for busy, analytical minds
```

## User Personas
```yaml
primary_persona:
  name: "Busy Professional Seeking Clear Guidance"
  age: "28-45"
  occupation: "Executive, Entrepreneur, Knowledge Worker"
  goals:
    - Get a clear guide to achieve calm
    - See progress in real-time without guesswork
    - Build a practice that actually sticks
    - Integrate wellness into busy schedule
  pain_points:
    - Limited time for wellness activities
    - Traditional meditation feels unclear or ineffective
    - Wants data-driven results and feedback
    - Struggles with knowing if they're "doing it right"
```

## User Stories
```yaml
landing_page:
  - story: "As a busy professional, I want to understand how breath training gives me clear guidance so I can achieve calm without guesswork"
  - story: "As an analytical person, I want to see scientific backing so I trust the approach"
  - story: "As a mobile user, I want the site to work perfectly on my phone"

authentication:
  - story: "As a user, I want to sign up quickly with email so I can start tracking my progress"
  - story: "As a returning user, I want seamless sign-in to access my dashboard"

dashboard:
  - story: "As an authenticated user, I want to see my progress at a glance so I stay motivated"
  - story: "As a data-driven person, I want detailed analytics on my performance"

content:
  - story: "As a skeptic, I want to learn the science behind breath training so I understand it's legitimate"
  - story: "As a beginner, I want clear guidance on getting started"
```

## Key Messaging & Positioning
```yaml
primary_value_proposition: "Breath training that works for busy, analytical minds"
secondary_messaging: "Stop wondering if you're 'doing it right.' See your progress in real-time and build a practice that actually sticks"

target_audience: "Busy professionals who want a clear guide to achieve calm"

key_benefits:
  - "See your calm in real-time - no guesswork, just results"
  - "Gamified with points and achievements to build lasting habits"
  - "Based on 30+ years of research"

social_proof_example: "I could never stay focused on meditating before Equilibrium. Now I can actually see when I'm doing it right - it's finally made meditation click for me."

terminology:
  - Use "breath training" instead of "biofeedback" in user-facing content
  - Keep technical terms like "heart rate variability" for educational content
  - Never use "coherence" - use "efficiency percentage" instead
  - Research citations remain specific (Stanford, HeartMath Institute, etc.)
```

## Technical Architecture
```yaml
frontend:
  framework: "React 18 with TypeScript"
  styling: "Tailwind CSS"
  routing: "React Router"
  state_management: "Zustand"
  charts: "Recharts"
  icons: "Lucide React"
  logo: "Four-bar design (violet, magenta, orange, green)"

backend:
  database: "Supabase PostgreSQL"
  authentication: "Supabase Auth"
  real_time: "Supabase Realtime (future)"

deployment:
  hosting: "Netlify"
  domain: "equilibrium.app ready"
```

## Design System
```yaml
logo:
  design: "Four vertical bars in gradient colors"
  colors: ["violet", "magenta", "orange", "green"]
  usage: "Consistent across all pages and components"

colors:
  primary_gradient: 
    violet: "#A070FF"
    magenta: "#FF5C8A" 
    orange: "#FFB13C"
    green: "#A1DB4E"
  neutrals:
    black: "#1a1a1a"
    gray_900: "#171717"
    gray_600: "#525252"
    gray_400: "#a3a3a3"
    gray_100: "#f5f5f5"
    white: "#ffffff"

typography:
  headings: "Playfair Display, Georgia, serif"
  body: "Inter, system-ui, sans-serif"
  sizes:
    h1: "text-4xl md:text-6xl"
    h2: "text-3xl md:text-4xl"
    h3: "text-2xl md:text-3xl"
    body: "text-base md:text-lg"

spacing:
  system: "8px base (Tailwind default)"
  sections: "py-16 md:py-24"
  containers: "px-4 md:px-8 max-w-7xl mx-auto"
```

## Data Models
```yaml
users:
  id: "UUID (primary key)"
  email: "TEXT (unique)"
  full_name: "TEXT"
  created_at: "TIMESTAMP"

sessions:
  id: "UUID (primary key)"
  user_id: "UUID (foreign key)"
  points: "INTEGER (0-100 typical)"
  efficiency_percentage: "INTEGER (0-100)"
  duration_seconds: "INTEGER"
  session_date: "DATE"
  created_at: "TIMESTAMP"

achievements:
  id: "UUID (primary key)"
  user_id: "UUID (foreign key)"
  achievement_type: "TEXT (streak, efficiency, milestone)"
  achievement_name: "TEXT"
  unlocked_at: "TIMESTAMP"

user_stats:
  user_id: "UUID (primary key)"
  total_sessions: "INTEGER"
  total_points: "INTEGER" 
  total_duration_seconds: "INTEGER"
  average_efficiency: "DECIMAL"
  current_streak_days: "INTEGER"
  last_session_date: "DATE"
  updated_at: "TIMESTAMP"
```

## Content Strategy
```yaml
tone:
  voice: "Professional but approachable"
  messaging: "Clear guidance over traditional meditation"
  target: "Busy professionals seeking practical solutions"

key_messages:
  - "Breath training that works for busy, analytical minds"
  - "Stop wondering if you're 'doing it right.' See your progress in real-time"
  - "Get a clear guide to achieve calm and build a practice that actually sticks"
  - "Based on 30+ years of research"

value_propositions:
  real_time: "See your calm in real-time - no guesswork, just results"
  gamified: "Gamified with points and achievements to build lasting habits"
  science: "Based on 30+ years of research"
```

## Implementation Status
```yaml
phase_1: "✅ COMPLETED - Landing Page Foundation"
phase_2: "✅ COMPLETED - Authentication System" 
phase_3: "✅ COMPLETED - Database & User Data"
phase_4: "✅ COMPLETED - Learn & Progress Sections"
phase_5: "🔄 IN PROGRESS - Messaging & Design Updates"

current_update:
  scope: "Align messaging and design with new positioning"
  changes:
    - "Update logo to four-bar design across all components"
    - "Replace 'biofeedback' with 'breath training' in user-facing content"
    - "Update hero messaging to new value propositions"
    - "Maintain technical accuracy while improving accessibility"
    - "Remove 'coherence' terminology, keep 'efficiency percentage'"
```

## Success Metrics
```yaml
engagement:
  bounce_rate: "<40%"
  time_on_site: ">2 minutes"
  pages_per_session: ">2"

conversion:
  email_signup: ">5%"
  app_store_clicks: ">3%"
  dashboard_retention: ">60% (7-day)"

technical:
  page_load_speed: "<3 seconds"
  mobile_performance: ">90 Lighthouse score"
  accessibility: "WCAG 2.1 AA compliant"
```

## Future Enhancements
```yaml
authentication_upgrades:
  - "Apple ID and Google OAuth integration"
  - "Enhanced user profile management"

performance_optimizations:
  - "Advanced analytics and cohort analysis"
  - "Real-time sync with mobile app"
  - "Predictive performance insights"

marketing_features:
  - "A/B testing framework"
  - "Email automation and marketing"
  - "Referral and growth systems"
```