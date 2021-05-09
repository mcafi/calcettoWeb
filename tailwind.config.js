const colors = require("tailwindcss/colors")

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        colors: {
            primary: {
                light: "#058939",
                DEFAULT: "#007935",
                dark: "#006925"
            },
            white: colors.white,
            black: colors.black,
            red: colors.red,
            grey: colors.trueGray
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
}