/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#2B2F30'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation:{
        'bounce': 'bounce 3s linear infinite'
      }
    },
  },
  plugins: [],
}