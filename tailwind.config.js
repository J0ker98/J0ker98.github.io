/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.html",
    "./*.md"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Slate 900
        accent: '#6366f1', // Indigo 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
