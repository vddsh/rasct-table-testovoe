const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      'arrow-down': "url('./img/Arrowdown.png')",
      'left': "url('./img/left.png')",
      'right': "url('./img/right.png')",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      'header-text': '#777777',
      'gray-dark': '#5B5B5B',
      'new-gray': '#C0C0C0',
      'input-bg': '#F2F2F2',
      'btn-red': '#A6192E',
      'speed-bad': '#DB4437',
      'speed-above': '#4285F4',
      'speed-expected': '#0F9D58',
      'speed-yellow': '#E2B534',
      'drop-data': '#F2F2F2',
      'hr': '#A6192E',
      'export-csv': '#C0C0C0',
      'table-head': '#777777',
    },
  },
  plugins: [],
}