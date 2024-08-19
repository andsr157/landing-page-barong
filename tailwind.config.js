const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultTheme.colors,
  ...{
    'brg-primary': '#307FF5',
    'brg-secondary': '#3BCEE0',
    'brg-primary-dark': '#363F5E',
    'brg-secondary-dark': '#384D84',
    'brg-gray': '#4A526E',
    'brg-dark-gray': '#4A526E',
    'brg-light-gray': '#C1C9D6',
    'brg-red': '#F53030',
    'brg-orange': '#F9A43A',
    'brg-brown': '#C75025',
    'brg-white': '#F6F6F8',
  },
}

module.exports = {
  darkMode: 'class',
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors,
    },
  },
  presets: [
    require('@morpheme/tailwind-config/preset'),
  ],
}
