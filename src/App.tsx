import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { analytics } from './lib/firebase';

// Pages
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Progress from './pages/Progress';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Components
import ProtectedRoute from './components/ui/ProtectedRoute';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const { initialize } = useAuthStore();

  useEffect(() => {
    initialize();
    
    // Initialize Firebase Analytics (automatically tracks page views)
    if (analytics) {
      console.log('Firebase Analytics initialized');
    }
  }, [initialize]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/progress" 
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;