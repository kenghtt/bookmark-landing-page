/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/*.jsx',
    './src/*.jsx',
  ],
  theme: {
    color: {
      'softBlue':'hsl(231, 69%, 60%)',
      'softRed':'hsl(0, 94%, 66%)',
      'grayBlue':'hsl(229, 8%, 60%)',
      'veryDarkBlue':'hsl(229, 31%, 21%)'
    },
    extend: {},
  },
  plugins: [],
}
