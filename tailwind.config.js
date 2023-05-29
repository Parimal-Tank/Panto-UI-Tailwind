/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
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

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  fontFamily: {
    Gilroy: ["Gilroy", "sans-serif"],
    Inter: ['Inter , "sans-serif'],
    Dm: ["DM", "sans-serif"],
  },
};
