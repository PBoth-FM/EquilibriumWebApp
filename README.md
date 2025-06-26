# 🌊 Equilibrium - Breath Training Web Application

> **Meditation that works for busy, analytical minds**

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-brightgreen)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)
![Supabase](https://img.shields.io/badge/Supabase-2.39.3-green)

Equilibrium is a modern web application that provides breath training guidance through real-time biofeedback. Built for busy professionals who want a clear, data-driven approach to meditation and stress management.

## 🚀 Features

### 🎯 Core Functionality
- **Real-time Progress Tracking**: See your breath training efficiency in real-time
- **Gamified Experience**: Earn points, achievements, and maintain streaks
- **Data-driven Insights**: Advanced analytics with interactive charts
- **Mobile-responsive Design**: Perfect experience across all devices

### 📊 Dashboard & Analytics
- Personal dashboard with key metrics at a glance
- Current streak tracking and session history
- Average efficiency calculations
- Total sessions and points earned
- Interactive progress charts with time period filtering (7d, 30d, 90d, all time)

### 🏆 Achievement System
- Comprehensive achievement tracking
- Visual badge gallery
- Streak milestones and efficiency targets
- Gamified progress to encourage consistent practice

### 📚 Educational Content
- Science-backed breathing techniques
- HRV (Heart Rate Variability) education
- Research citations from 30+ years of studies
- Step-by-step getting started guide
- Best practices and optimization tips

### 🔐 Authentication & Security
- Secure user registration and authentication
- Email verification system
- Password reset functionality
- Protected routes for authenticated content
- Row Level Security (RLS) with Supabase

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **React Router** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Recharts** for interactive data visualizations

### Backend & Database
- **Supabase** for backend-as-a-service
- **PostgreSQL** database with real-time capabilities
- **Supabase Auth** for authentication management
- **Row Level Security** for data protection

### State Management & Data
- **Zustand** for lightweight state management
- **Custom hooks** for data fetching and caching
- **TypeScript interfaces** for type safety

### Development Tools
- **ESLint** with TypeScript configuration
- **PostCSS** with Autoprefixer
- **Firebase Analytics** for user insights

## 📁 Project Structure

```
EquilibriumWebApp/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Core UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Landing page hero
│   │   └── ...
│   ├── pages/               # Application pages
│   │   ├── LandingPage.tsx  # Marketing landing page
│   │   ├── Dashboard.tsx    # User dashboard
│   │   ├── Progress.tsx     # Analytics & progress tracking
│   │   ├── Learn.tsx        # Educational content
│   │   └── Auth/            # Authentication pages
│   ├── hooks/               # Custom React hooks
│   │   ├── useUserData.ts   # User data fetching
│   │   └── useProgressData.ts # Progress analytics
│   ├── store/               # Global state management
│   │   └── authStore.ts     # Authentication state
│   ├── lib/                 # External service configurations
│   │   ├── supabase.ts      # Supabase client & types
│   │   └── firebase.ts      # Firebase analytics
│   └── assets/              # Static assets
├── supabase/
│   └── migrations/          # Database schema migrations
├── public/                  # Static public assets
└── config files            # Vite, Tailwind, TypeScript configs
```

## 🗄️ Database Schema

### Core Tables
- **`user_profiles`** - Extended user information
- **`sessions`** - Breath training session data
- **`achievements`** - User achievement tracking
- **`user_stats`** - Aggregated performance metrics

### Key Features
- Row Level Security (RLS) policies
- Real-time subscriptions capability
- Optimized queries with proper indexing
- Foreign key relationships for data integrity

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/EquilibriumWebApp.git
   cd EquilibriumWebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   # Add other Firebase config variables as needed
   ```

4. **Database Setup**
   ```bash
   # Run Supabase migrations
   npx supabase db reset
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Key Metrics & Analytics

The application tracks several key performance indicators:

- **Session Efficiency**: Real-time breath training effectiveness (0-100%)
- **Streak Tracking**: Consecutive days of practice
- **Points System**: Gamified scoring based on performance
- **Duration Tracking**: Total and average session lengths
- **Progress Trends**: Visual analytics over time periods

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Violet (#A070FF) → Magenta (#FF5C8A) → Orange (#FFB13C) → Green (#A1DB4E)
- **Neutrals**: Sophisticated grayscale palette
- **Typography**: Playfair Display (headings) + Inter (body)

### Component Library
- Consistent spacing system (8px base)
- Rounded corners and subtle shadows
- Gradient accents and hover effects
- Mobile-first responsive design

## 🔒 Security & Privacy

- **Authentication**: Secure email/password with Supabase Auth
- **Data Protection**: Row Level Security on all database tables
- **Privacy**: User data is encrypted and access-controlled
- **CORS**: Properly configured for production deployment

## 🚀 Deployment

This project is configured for deployment on **Firebase Hosting** with integrated Firebase Analytics.

### Firebase Hosting Setup

#### Prerequisites
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project created at [Firebase Console](https://console.firebase.google.com)
- Authenticated with Firebase: `firebase login`

#### Initial Setup

1. **Initialize Firebase in your project** (if not already done):
   ```bash
   firebase init hosting
   ```
   
   Select these options:
   - Public directory: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds and deploys with GitHub: `Optional`

2. **Configure Firebase project**:
   ```bash
   firebase use --add
   # Select your Firebase project and give it an alias
   ```

#### Deployment Process

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to Firebase Hosting**:
   ```bash
   # Deploy to production
   firebase deploy --only hosting
   
   # Deploy to preview channel (for testing)
   firebase hosting:channel:deploy preview-branch-name
   ```

3. **Custom domain setup** (optional):
   ```bash
   firebase hosting:sites:create your-custom-domain
   ```

#### Firebase Configuration

Your `firebase.json` is configured for SPA routing:
```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
```

#### Environment Variables

Ensure all production environment variables are properly configured in your hosting environment:

**Supabase Configuration:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

**Firebase Configuration:**
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

#### GitHub Actions (Optional)

For automated deployments, add this workflow to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
          VITE_FIREBASE_MEASUREMENT_ID: ${{ secrets.VITE_FIREBASE_MEASUREMENT_ID }}
        
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          projectId: your-firebase-project-id
```

#### Useful Commands

```bash
# Preview locally before deploying
firebase serve --only hosting

# View deployment history
firebase hosting:sites:list

# Clone live site to local preview
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:TARGET_CHANNEL_ID

# Delete a preview channel
firebase hosting:channel:delete CHANNEL_ID
```

## 📈 Development Roadmap

### ✅ Completed (Phase 1-4)
- Landing page with hero and value propositions
- Complete authentication system
- User dashboard with real-time stats
- Progress analytics with interactive charts
- Educational content and research backing
- Achievement system with gamification

### 🔄 Current Phase (Phase 5 - Production Polish)
- Analytics integration optimization
- SEO and meta tag implementation
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization
- Cross-browser testing
- Production security review

### 🎯 Future Enhancements
- Real-time data sync with mobile app
- Advanced analytics and insights
- Multi-language support
- Dark mode theme
- Email notifications system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting with ESLint
- Write descriptive commit messages
- Test components thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with research from Stanford University and HeartMath Institute
- Inspired by 30+ years of HRV and biofeedback research
- Thanks to the React and Supabase communities

## 📞 Support

For support, email hello@equilibrium.app or join our community discussions.

---

**Built with ❤️ for busy professionals who want clear guidance to achieve calm.**
