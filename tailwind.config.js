const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontSize: {
        '52-font': '520px'
      },

      width: {
        '520': '520px',
        '490': '490px',
        '470': '470px'
      },

      height: {
        '623': '623px',
        '470': '470px',
      },

      backgroundImage: {
        'grain': ["url('/images/fond_grain.png')"]
      },

      fontFamily: {
        'yeseva': ['Yeseva One'],
        'inter': ['Inter', 'sans-serif'],
      },

      colors: {
        'noir': ['#242424'],
        'jaune': ['#FFE400'],
        'gris': ['#363636'],
        'gris-foncé': ['#979797'],
        'rouge': ['#CD201F'],
        'bleu': ['#3B5999'],
      },

      borderWidth: {
        default: '1px'
      },

      screens: {
        '320': '320px',
        '1100': '1100px',
        '1440': '1440px',
      },
      lineHeight: {
        'extra-loose': '4'
      },

      screens: {
        'light': { 'raw': '(prefers-color-scheme: light)' },
      },
    },


  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
