/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
