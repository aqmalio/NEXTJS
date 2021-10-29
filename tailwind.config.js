module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      hairline: 100,
      extralight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
