import React from 'react';
import logoSrc from '../../assets/equilibrium_logo.svg';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | 'xl';
  clickable?: boolean;
  onClick?: () => void;
}

export default function Logo({ 
  className = "", 
  showText = true, 
  textSize = 'xl',
  clickable = false,
  onClick
}: LogoProps) {
  const logoContent = (
    <>
      {/* SVG Logo */}
      <img 
        src={logoSrc} 
        alt="Equilibrium Logo"
        className="h-8 w-auto"
      />
    </>
  );

  if (clickable && onClick) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-violet focus:ring-offset-2 rounded-lg ${className}`}
        aria-label="Go to home page"
      >
        {logoContent}
      </button>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {logoContent}
    </div>
  );
}