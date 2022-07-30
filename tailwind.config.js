/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blacknew: '#333333',
        borderBlackNew:'#e8e8e8'
      },
    },
  },
  plugins: [],
}