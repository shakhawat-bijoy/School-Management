/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'serif',],
      'Inter': ['Inter', 'sans-serif',],
    },
    extend: {},
  },
  plugins: [],
}