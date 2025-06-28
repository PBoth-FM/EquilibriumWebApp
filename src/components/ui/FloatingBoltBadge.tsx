import React, { useState, useEffect } from 'react';

export default function FloatingBoltBadge() {
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if footer is visible in viewport (any part of it)
      const footerVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
      
      setIsOverFooter(footerVisible);
    };

    // Check initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also check on resize in case footer position changes
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-40 transition-opacity duration-200"
      style={{
        // Ensure it's below the header but above most content
        zIndex: 40
      }}
    >
      <a 
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity duration-200"
        aria-label="Powered by Bolt.new"
      >
        <img
          src={isOverFooter ? "/BoltLogo_white_circle_360x360.png" : "/black_circle_360x360.png"}
          alt="Powered by Bolt.new"
          className="w-12 h-12 md:w-15 md:h-15 rounded-full"
          style={{
            // 25% increase from original 48px (12 in Tailwind) = 60px (15 in Tailwind)
            // Mobile: 50px = ~12.5 in Tailwind, so we'll use w-12 h-12 (48px) on mobile
            width: window.innerWidth >= 768 ? '60px' : '48px',
            height: window.innerWidth >= 768 ? '60px' : '48px'
          }}
        />
      </a>
    </div>
  );
}