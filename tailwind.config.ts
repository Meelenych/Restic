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
        'pulse-glow-emerald': {
          '0%, 100%': {boxShadow: '0 0 15px 5px rgb(0, 250, 154)'},
          '50%': {boxShadow: '0 0 35px 15px rgb(0, 250, 154)'},
        },
        'pulse-glow-amber': {
          '0%, 100%': {boxShadow: '0 0 15px 5px #fbbf24'},
          '50%': {boxShadow: '0 0 35px 15px #fbbf24'},
        },
        'pulse-glow-indigo': {
          '0%, 100%': {boxShadow: '0 0 15px 5px #6366f1'},
          '50%': {boxShadow: '0 0 35px 15px #6366f1'},
        },
        'pulse-glow-red': {
          '0%, 100%': {boxShadow: '0 0 15px 5px #f87171'},
          '50%': {boxShadow: '0 0 35px 15px #f87171'},
        },
        jumpOut: {
          '0%': {transform: 'scale(0)', opacity: '0'},
          '50%': {transform: 'scale(1.2)', opacity: '1'},
          '100%': {transform: 'scale(1)', opacity: '1'},
        },
      },

      animation: {
        'flip-x': 'flip 1s ease-in-out',
        'spin-slow': 'rotate 1s linear',
        'pulse-glow-emerald': 'pulse-glow-emerald 2s infinite',
        'pulse-glow-indigo': 'pulse-glow-indigo 2s infinite',
        'pulse-glow-amber': 'pulse-glow-amber 2s infinite',
        'pulse-glow-red': 'pulse-glow-red 2s infinite',
        jumpOut: 'jumpOut 1s ease-out forwards',
      },

      boxShadow: {
        'glow-3xl': '0 0 35px 35px rgba(0, 250, 154, 0.6)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
