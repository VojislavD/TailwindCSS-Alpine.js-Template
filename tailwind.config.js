module.exports = {
  mode: 'jit',
  purge: ['./*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#1f4b8e",
        "primary-dark": "#102a52",
        "secondary": "#182430",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
