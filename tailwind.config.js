const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        open: 'Open Sans',
        pop: 'Poppins'
      },
      colors: {
        indigo: colors.indigo,
        violet: colors.violet,
        bluegray: colors.blueGray,
      },
      backgroundImage: theme => ({
        'hero-kelas': "url('/public/img/bg-kelas.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
