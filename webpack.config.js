var webpack = require('webpack')
var path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var SRC_DIR = path.resolve(__dirname, 'src')
var CONFIG_DIR = path.resolve(__dirname, 'config')
var BUILD_DIR = path.resolve(__dirname, 'build/public')

var config = {
	entry: SRC_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: '[name].bundle.js'
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
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js'
		}),
		new CopyWebpackPlugin([{
			from: '**',
			context: 'src/static/',
			to: '',
			flatten: false
		}])
	]
}

module.exports = config
