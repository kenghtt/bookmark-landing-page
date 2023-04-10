/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/*.jsx',
    './src/components/layout/HeaderComponents/*.jsx',
    './src/components/layout/MainContent/*.jsx',
    './src/components/layout/FooterComponent/*.jsx',
    './src/components/layout/HeroSection/*.jsx',
    './src/components/layout/FeaturesComponents/*.jsx',
    './src/components/layout/FAQ_section/*.jsx',
    './src/components/layout/ExtensionsSection/*.jsx',
    './src/components/layout/Form/*.jsx',
  ],
  theme: {
    
    extend: {
      colors: {
      'softBlue':'hsl(231, 69%, 60%)',
      'softRed':'hsl(0, 94%, 66%)',
      'grayBlue':'hsl(229, 8%, 60%)',
      'veryDarkBlue':'hsl(229, 31%, 21%)',
      'white':'#FFF'
    },
  },
  },
  plugins: [],
}
