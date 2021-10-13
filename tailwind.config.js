const plugin = require('tailwindcss/plugin');
 
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './pages/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#1f4b8e",
        "primary-dark": "#102a52",
        "secondary": "#182430",
        "secondary-dark": "#060C11",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
          '.custom-scrollbar': {
              '.custom-scrollbar::-webkit-scrollbar': { width: '6px' },
              '.custom-scrollbar::-webkit-scrollbar-track': { background: theme('bg-secondary')},
              '.custom-scrollbar::-webkit-scrollbar-thumb': { background: '#888' },
              '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {background: '#555'},
          }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
