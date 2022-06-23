module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary':"#FF7396",
        'secondary':"#F4E06D",
        'terciary':"#C499BA",
      },
      fontFamily: {
        Confortaa:["Comfortaa", "cursive",],
      },
    },
  },
  
  plugins: [require("daisyui")],
}

