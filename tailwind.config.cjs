/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myPurple: '#A016A6',
        myBlue: '#2F268B',
      },
    },
  },
  plugins: [],
};
