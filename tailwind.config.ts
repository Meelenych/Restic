module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': {transform: 'perspective(400px) rotateY(0deg)'},
          '50%': {transform: 'perspective(400px) rotateY(180deg)'},
          '100%': {transform: 'perspective(400px) rotateY(360deg)'},
        },
      },
      animation: {
        'flip-x': 'flip 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'], // Enable hover variant for animation
    },
  },
  plugins: [],
};