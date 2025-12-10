module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.{js,ts,css}",
    "./hugo-blox/**/*.html"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}