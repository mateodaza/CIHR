var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './public/main.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
