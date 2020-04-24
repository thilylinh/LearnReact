var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules',
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}