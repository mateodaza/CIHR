var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './public/main.js'),
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  }
};
