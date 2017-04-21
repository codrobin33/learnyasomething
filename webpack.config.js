var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ],
          plugins: []
        }
      },
    ],
  }
};

module.exports = config;
