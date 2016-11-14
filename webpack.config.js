const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  devtool: 'source-map',

  resolve: {
    root: path.join(__dirname, 'public'),
    extensions: ['', '.js', '.jsx', '.json'],
  },

  entry: path.join(__dirname, 'public', 'main.js'),
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query   : {
            cacheDirectory : true,
            plugins        : ['transform-runtime'],
            presets        : ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },

  plugins : [
    new HtmlWebpackPlugin({
      template : path.join(__dirname, 'public', 'index.html'),
      hash     : false,
      favicon  : path.join(__dirname, 'public', 'favicon.ico'),
      filename : 'index.html',
      inject   : 'body',
      minify   : {
        collapseWhitespace : true,
      },
    }),
  ],
};
