import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global component that automatically scrolls to top on route changes
 * Uses instant behavior for immediate jump without visible scrolling animation
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump to top on every route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // This component doesn't render anything
}