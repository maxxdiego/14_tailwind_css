/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '320px': '320px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px'
      },
      fontSize: {
        'subtitle': '1.7rem'
      },
      colors: {
        'main-gray': '#f0f2f5',
        'main-blue': '#0866FF',
        'main-blue-hover': '#1877F2',
        'main-green': '#42b72a',
        'main-green-hover': '#36a420'
      }
    },
  },
  plugins: [],
}

