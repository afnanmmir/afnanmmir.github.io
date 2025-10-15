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
        lightText: '#76797d',
        'purple-primary': '#8b5cf6',
        'purple-secondary': '#a78bfa',
        'purple-light': '#c4b5fd',
        'purple-dark': '#7c3aed',
        'purple-darker': '#6d28d9'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
