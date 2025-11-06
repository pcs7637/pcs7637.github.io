/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        medblue: '#004766',
        'medblue-dark': '#003366',
        'medblue-deep': '#003247',
        'medblue-bright': '#80D9FF',
        'medblue-soft': '#BFECFF',
      },
      boxShadow: {
        'medblue-glow': '0 25px 70px -25px rgba(128, 217, 255, 0.45)',
      },
    },
  },
  plugins: [],
}
