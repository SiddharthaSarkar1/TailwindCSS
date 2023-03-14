/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/**/*.html"],
  darkMode: 'media',
  theme: {
    
    extend: {
      colors:{
        MyColor:{
          300: "#D9D5D5"
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
      },
    },
  },
  plugins: [],
}
