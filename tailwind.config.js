/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7931E',
        secondary: '#363636',
        accent1: '#20B2AA',
        accent2: '#FF4136',
        accent3: '#E6E6E6',
        darkModePrimary: '#2C2F33',
        darkModeSecondary: '#FFFFFF',
        darkModeAcc1: '#20B2AA',
        darkModeAcc2: '#FF4136',
        darkModeAcc3: '#E6E6E6',
      },
    },
  },
  plugins: [],
}

