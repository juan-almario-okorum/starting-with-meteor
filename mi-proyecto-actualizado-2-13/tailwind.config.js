// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/**/*.{js,jsx,ts,tsx,html}", // Para todos los archivos en la carpeta imports
    "./client/**/*.{js,jsx,ts,tsx,html}",  // Para todos los archivos en la carpeta client
    // Si tienes archivos HTML/JS/JSX/TSX en la raíz del proyecto, puedes añadir:
    // "./*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};