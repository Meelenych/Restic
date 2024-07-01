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
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        'pulse-glow': {
          '0%, 100%': {boxShadow: '0 0 15px 5px rgb(0, 250, 154)'},
          '50%': {boxShadow: '0 0 35px 15px rgb(0, 250, 154)'},
        },
      },

      animation: {
        'flip-x': 'flip 1s ease-in-out',
        'spin-slow': 'rotate 1s linear',
        'pulse-glow': 'pulse-glow 2s infinite',
      },

      boxShadow: {
        'glow-3xl': '0 0 35px 35px rgba(0, 250, 154, 0.6)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'], // Enable hover variant for animation
    },
  },
  plugins: [require('daisyui'),],
};