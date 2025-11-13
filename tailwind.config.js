/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: "#f43f5e", // pink lembut untuk RasaNusa 🍓
        secondary: "#f9a8d4",
      },
    },
  },
  plugins: [],
}
