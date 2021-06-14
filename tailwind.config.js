const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: "Bangers",
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "screen-tone": "url('/screen_tone_single_dot.png')",
      }),
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "40%": "40%",
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
