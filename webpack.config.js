var path = require("path");
var webpack = require('webpack');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: './main.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            // exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;