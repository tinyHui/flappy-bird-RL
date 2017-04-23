const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'javascript');
const BUILD_DIR = path.resolve(__dirname, 'static');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
