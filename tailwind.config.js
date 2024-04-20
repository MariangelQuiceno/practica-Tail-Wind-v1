/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'penn-blue': '#03093E', 
        'lapiz': '#006494',
        'md-blue': '#031C77',
        'saphire': '#1256AB',
        'azul': '#016EC3',
        'alice-blue': '#E8F1F2'
      },
      backgroundImage: {
        'header-bg': "url('./src/assets/backgrounds/bg_sea5.jpg')",
      },
    },
  },
  plugins: [],
}