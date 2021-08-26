const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        sky: colors.sky[300],
        cyan: colors.cyan[500],
      },
    },
  },
  variants: {},
  plugins: [],
};
