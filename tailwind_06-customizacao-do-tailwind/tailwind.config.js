/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
      screens: {
        'tablet': '640px',
        'cel': {'max': '400px'}
      },
    extend: {},
  },
  plugins: [],
}

