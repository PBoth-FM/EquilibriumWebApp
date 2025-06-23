import React from 'react';
import logoSrc from '../../assets/equilibrium_logo.svg';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | 'xl';
}

export default function Logo({ className = "", showText = true, textSize = 'xl' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* SVG Logo */}
      <img 
        src={logoSrc} 
        alt="Equilibrium Logo"
        className="h-8 w-auto"
      />
    </div>
  );
}