// tailwind.config.cjs
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lucida Grande',
          'Tahoma',
          'Verdana',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
