/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        xss: '0.7rem',
      },
      colors: {
        transparent: 'transparent',
        black: '#0D0D0D',
        white: '#ffffff',
        gold: '#ccb895',
        'gold-bright': '#b9854b',
        'gold-light': '#c59d44',
      },
      screens: {
        '105xl': { min: '1400px' },
        '3xl': { min: '1700px' },
        '4xl': { min: '2000px' },
      },
      fontFamily: {
        onest: ['Space Grotesk', 'sans-serif'],
        xing: ['Zhi Mang Xing', 'cursive'],
        dyna: ['DynaPuff', 'system-ui'],
      },
      backgroundOpacity: {
        80: '0.80',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '60vh': '60vh',
        full: '100%',
      },
      backgroundColors: {
        modal: 'rgba(0, 0, 0, 0.5)',
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        100: 100,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
