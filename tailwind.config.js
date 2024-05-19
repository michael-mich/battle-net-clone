/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        almostWhite: '#BDBEC1',
        darkBlue: '#15171E',
        mediumBlue: '#1A1C23',
        lightBlue: '#0074E0',
        gray: '#88898C',
        mediumGray: "#23252A",
        lightGrayBackground: '#303237',
        lightGray: '#C2C2C4',
        borderGray: '#2F3136',
      },
      keyframes: {
        displayOpacity: {
          '0%': {
            display: 'none',
            opacity: '0'
          },
          '100%': {
            display: 'block',
            opacity: '1'
          }
        },
        hideOpacity: {
          '0%': {
            display: 'block',
            opacity: '1'
          },
          '100%': {
            display: 'none',
            opacity: '0'
          }
        },
        displayRotateX: {
          '0%': {
            display: 'none',
            opacity: '0',
            transform: 'rotateX(-15deg)'
          },
          '100%': {
            display: 'block',
            opacity: '1',
            transform: 'rotateX(0)'
          }
        },
        hideRotateX: {
          '0%': {
            display: 'block',
            opacity: '1',
            transform: 'rotateX(0)'
          },
          '100%': {
            display: 'none',
            opacity: '0',
            transform: 'rotateX(-15deg)'
          }
        }
      },
      animation: {
        displayOpacity: 'displayOpacity .2s ease-in-out',
        hideOpacity: 'hideOpacity .2s ease-in-out'
      }
    },
  },
  plugins: [],
}