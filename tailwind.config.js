/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "brush": 'Water Brush',
        "mono": 'Monoton',
        "bang": 'Bangers',
        "pac": 'Pacifico',
      },
    },
  },
  plugins: [],
}
