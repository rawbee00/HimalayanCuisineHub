/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yatra': ['Yatra One', 'cursive'],
      },
      fontSize: {
        base: ['1.1rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
}
