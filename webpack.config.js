var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        table: './src/public/js/table'
    },
    output: {
        path: 'dist/public',
        filename: '[name].bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};