const colors = require("tailwindcss/colors")

module.exports = {
    //purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        colors: {
            primary: "#007935",
            white: colors.white,
            black: colors.black,
            grey: colors.trueGray
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}