/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#13293D', 
        'lapiz': '#006494',
        'cerulean': '#247BA0',
        'alice-blue': '#E8F1F2'
      },
    },
  },
  plugins: [],
}