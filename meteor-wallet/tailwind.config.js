/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/**/*.{js,jsx,ts,tsx}",
    "./server/**/*.{js,jsx,ts,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
