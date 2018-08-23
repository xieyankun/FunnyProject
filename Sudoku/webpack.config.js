const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src'),
    index: 'js/index'
  },
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}