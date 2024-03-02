/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include index.html outside src directory
    "./src/**/*.html", // Include HTML files inside src directory and subdirectories
    "./src/**/*.tsx", // Include TypeScript/React files inside src directory and subdirectories
    // Add other file types if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
