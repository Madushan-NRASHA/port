/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FCD34D',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FCD34D, 0 0 10px #FCD34D, 0 0 15px #FCD34D' },
          '100%': { boxShadow: '0 0 10px #FCD34D, 0 0 20px #FCD34D, 0 0 30px #FCD34D' },
        },
      },
    },
  },
  plugins: [],
}

