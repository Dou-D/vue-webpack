const path = require('path')
const { VueLoaderPlugin } = require("vue-loader");
const HTMLWebapckPlugin = require('html-webpack-plugin')
module.exports = {
    devServer: {
        hot: true,
        open: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.pug$/,
                use: ['pug-plain-loader']
            }
        ]
    },
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [new VueLoaderPlugin(), new HTMLWebapckPlugin({
        templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Webpack App</title>
          </head>
          <body>
            <div id="app" />
          </body>
        </html>
            `
    })],
}