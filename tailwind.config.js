/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        brush: 'Water Brush',
        mono: 'Monoton',
        bang: 'Bangers',
        pac: 'Pacifico',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      colors: {
        primary: '#2B2D42',
        secondary: '#8D99AE',
        tertiary: '#EDF2F4',
        // tertiary: '#FFD97D',
        // quaternary: '#FF9B85',
        // quinary: '#EE6055',
        // 'primary': '#2EC4B6',
        // 'secondary': '#CBF3F0',
        // 'tertiary': '#FFBF69',
        // 'quaternary': '#FF9F1C',
        // 'quinary': '#FFFFFF',
        // 'senary': '#FFFFFF',
      },
      animation: {
        waving: 'wave 2s linear infinite',
        giggle: 'wave 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
