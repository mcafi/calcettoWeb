const colors = require("tailwindcss/colors")

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: "#007935",
            white: colors.white,
            black: colors.black
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}