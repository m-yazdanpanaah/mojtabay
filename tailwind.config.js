const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Spartan'", ...fontFamily.sans],
      },
      opacity: {
        3: '0.03',
      },
      zIndex: {
        1: '1',
      },
      keyframes: {
        bouncy: {
          '0%, 100%': {
            transform: 'translateY(0%)',
          },
          '50%': { transform: 'translateY(15%)' },
        },
      },
      animation: {
        bouncy: 'bouncy 0.7s ease-in-out infinite;',
      },
      spacing: {
        100: '26rem',
        101: '32rem',
      },
      boxShadow: {
        light: '0px 4px 4px rgba(255, 58, 107, 0.28)',
      },
      height: {
        almostFull: '90vh',
        notFull: '10vh',
      },
      width: {
        almostWide: '80vw',
      },
    },

    colors: {
      night: '#0B0C10',
      evening: '#fff',
      drapes: '#2E3D4F',
      moonlight: '#fff',
      teeth: '#243141',
      ocean: '#2E3D4F',
      giant: '#FC0E49',
      blood: '#D10337',
      hearth: '#FF3A6B',
      white: '#fff',
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
