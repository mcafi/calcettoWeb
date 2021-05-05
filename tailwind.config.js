const colors = require("tailwindcss/colors")

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            primary: "#007935",
            white: colors.white,
            black: colors.black,
            gray: colors.gray
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}