/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*'],
  // coustomize your brand style
  theme: {
    screens: {
      xsm: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   blue: '#1fb6ff',
    //   pink: '#ff49db',
    //   orange: '#ff7849',
    //   green: '#13ce66',
    //   'gray-dark': '#273444',
    //   gray: '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      Geologica: ['Geologica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // extend your classes
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        blue1: '#1fb6ff',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
