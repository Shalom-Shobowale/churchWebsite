/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Secondary:"#fb5607",
        Primary:"#ffffff",
        Tertiary:"#000000"
      },
      fontFamily:{
        Jost:["Jost", "open sans"],
        Playwrite:["Playwrite", "open sans"]
      }
    },
  },
  plugins: [],
}