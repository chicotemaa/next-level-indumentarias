/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
        },
        pastel: {
          mint: '#D1F2EB',
          lavender: '#E8E3F4',
          peach: '#FADADD',
          yellow: '#FFF4D9',
          blue: '#D4E6F1',
        }
      }
    },
  },
  plugins: [],
};