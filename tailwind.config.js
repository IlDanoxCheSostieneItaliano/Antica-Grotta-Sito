/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tufo': '#d4c2a5',
        'ocra': '#c78b32',
        'oliva': '#4a5d23',
        'vinaccia': '#7b2c3a',
        'grotta-dark': '#1c1917',
        'grotta-light': '#f5f5f4',
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'stone-texture': "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
      }
    },
  },
  plugins: [],
}
