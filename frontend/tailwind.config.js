/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d8b0',
          300: '#e9be7c',
          400: '#e0a34e',
          500: '#d4882a',
          600: '#c47721',
          700: '#a35e1d',
          800: '#854c1e',
          900: '#6d3f1c',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e5',
          200: '#c3c6cb',
          300: '#9ea2aa',
          400: '#797e88',
          500: '#5f636d',
          600: '#4b4e57',
          700: '#3d4047',
          800: '#2a2c31',
          900: '#1a1b1f',
          950: '#111214',
        },
        accent: {
          DEFAULT: '#d4882a',
          light: '#e0a34e',
          dark: '#a35e1d',
        },
        steel: {
          50: '#f4f6f7',
          100: '#e2e8eb',
          200: '#c8d3d9',
          300: '#a1b3bd',
          400: '#738d9b',
          500: '#587280',
          600: '#4b5f6c',
          700: '#41505a',
          800: '#3a454d',
          900: '#333c43',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
