module.exports = {
    rules: [{
        test: /\.css$/,
        use: [
            'vue-style-loader',
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            'postcss-loader'
        ]
    }]
}