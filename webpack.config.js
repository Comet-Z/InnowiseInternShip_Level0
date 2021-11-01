'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {

    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
            filename: 'index.html',
            template: "./src/index.html"
      
          }),
    ]
};
