/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite', // Custom animation
        flash: 'flash 1s linear infinite', // Custom animation
        slideInLeft: 'slideInLeft 1s ease-in-out', // Custom animation
        slideInRight: 'slideInRight 1s ease-in-out', // Custom animation
        slideInUp: 'slideInUp 1s ease-in-out', // Custom animation
        slideInDown: 'slideInDown 1s ease-in-out', // Custom animation
        fadeIn: 'fadeIn 1s ease-in forwards', // Custom animation
        fadeOut: 'fadeOut 1s ease-out forwards', // Custom animation
        zoomIn: 'zoomIn 1s ease-in forwards', // Custom animation
        zoomOut: 'zoomOut 1s ease-out forwards', // Custom animation
        shake: 'shake 1s ease-in-out infinite', // Custom animation
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flash: {
          '0%, 100%, 50%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      
    },
  },
  plugins: [],
}
