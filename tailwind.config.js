/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Work Sans', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          violet: '#A070FF',
          magenta: '#FF5C8A',
          orange: '#FFB13C',
          green: '#A1DB4E',
        },
        neutral: {
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A070FF 0%, #FF5C8A 33%, #FFB13C 66%, #A1DB4E 100%)',
        'gradient-primary-vertical': 'linear-gradient(180deg, #A070FF 0%, #FF5C8A 33%, #FFB13C 66%, #A1DB4E 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(160, 112, 255, 0.1) 0%, rgba(255, 92, 138, 0.1) 33%, rgba(255, 177, 60, 0.1) 66%, rgba(161, 219, 78, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};