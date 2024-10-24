/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["gotham", "sans-serif"],
      },
      colors: {
        primary: "#FF1C03",
        gray_cus: "#FAFAFA",
      },
    },
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "900px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "376px" },
      mdpc: { min: "376px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "550px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}