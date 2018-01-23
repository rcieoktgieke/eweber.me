var path = require('path')

var SRC_DIR = path.resolve(__dirname, 'src')
var CONFIG_DIR = path.resolve(__dirname, 'config')
var BUILD_DIR = path.resolve(__dirname, 'build/public')

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      SRC_DIR + '/common',
      SRC_DIR + '/components',
      SRC_DIR + '/images',
      SRC_DIR + '/scenes',
      CONFIG_DIR
    ]
  }
}

module.exports = config
