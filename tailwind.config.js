/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"375px",
      md:"1440px",
      lg:"1536px"
    },
    extend: {
      fontFamily:{
        poppins:['Poppins', "sans-serif"],
        "open-sans":["Open-Sans","sans-serif"]
      },
      colors:{
        pViolet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)"
      }
    },
  },
  plugins: [],
}