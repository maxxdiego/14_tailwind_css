/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      }
    },
  },
  plugins: [],
}

