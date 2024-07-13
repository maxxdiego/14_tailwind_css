/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      },
      fontSize: {
        '12xl': '8rem'
      },
      colors:{
        'indigo-350': '#ff63aa'
      }
    },
  },
  plugins: [],
}

