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
        '520': '520px'
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
      },

      borderWidth: {
        default: '1px'
      }
    },

  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
