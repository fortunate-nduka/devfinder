module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      colors: {
        body: "#010409",
        card: "#31363F",
        button: "#56B44B",
        txtGray: "#9DA5B4",
      },
    },
  },
  plugins: [],
};
