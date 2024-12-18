/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};