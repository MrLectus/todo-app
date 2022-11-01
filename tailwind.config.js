/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}', './public/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('../images/bg-desktop-dark.jpg')",
        'desktop-light': "url('../images/bg-desktop-light.jpg')",
        'mobile-dark': "url('../images/bg-mobile-dark.jpg')",
        'mobile-light': "url('../images/bg-mobile-light.jpg')",
        'icon-check': "url('../images/icon-check.svg')",
        'icon-cross': "url('../images/icon-cross.svg')",
        'icon-moon': "url('../images/icon-moon.svg')",
        'icon-sun': "url('../images/icon-sun.svg')",
      },
      colors: {
        primary: {
          100: 'hsl(200,98%,61%)',
        },
        light: {
          'gray-100': 'hsl(0,0%,98%)',
          'gray-blue-100': 'hsl(236,33%,92%)',
          'gray-blue-300': 'hsl(233,11%,84%)',
          'gray-blue-500': 'hsl(236,9%,61%)',
          'gray-blue-800': 'hsl(235,19%,35%)',
        },
        dark: {
          'blue-800': 'hsl(235,21%,11%)',
          'gray-blue-801': 'hsl(235,24%,19%)',
          'gray-blue-100': 'hsl(234,39%,85%)',
          'gray-blue-101': 'hsl(236,33%,92%)',
          'gray-blue-500': 'hsl(234,11%,52%)',
          'gray-blue-800': 'hsl(233,14%,35%)',
          'gray-blue-900': 'hsl(237,14%,26%)',
        },
      },
    },
    fontFamily: {
      sans: ['Josefin Sans'],
    },
  },
  plugins: [],
};
