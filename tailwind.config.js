/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   xs: { max: "320px" },
    //   sm: "620px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1195px",
    //   "2xl": "1536px",
    // },
    screens: {
      xs: "320px",
      sm: "500px",
      md: "768px",
      lg: "991px",
      xl: "1195px",
      "2xl": "1440px",
      "3xl":'1536px'
    },
    extend: {
      colors: {
        grey: "#8d8d8d",
        black: "#1e1e1e",
        lightBlack: "#0d1b39",
        // white: "#ffffff",
      },
      fontFamily: {
        Gilroy: ["Gilroy", "sans-serif"],
        Inter: ['Inter , "sans-serif'],
        Dm: ["DM", "sans-serif"],
      },
    },
  },
  plugins: [],
  fontFamily: {
    Gilroy: ["Gilroy", "sans-serif"],
    Inter: ['Inter , "sans-serif'],
    Dm: ["DM", "sans-serif"],
  },
};
