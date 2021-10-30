'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        path2: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

        ]
    },
    resolve: {

    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
      
          }),
    ]
};
