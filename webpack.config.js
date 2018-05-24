var webpack = require('webpack')
var path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var siteConfig = require('./config/siteConfig.js')

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
		new CopyWebpackPlugin(
			Object.keys(siteConfig.pages).map(pageKey => {
				var page = siteConfig.pages[pageKey]
				return {
					from: 'src/index.html',
					to: page.htmlPath + 'index.html',
					transform: (html, path) => {
						var rootPath = ''
						for (var i = 0; i < page.depth; i ++) {
							rootPath += '../'
						}
						interpolated = html.toString().replace(/__interpolate_root_path__/g, rootPath)
						return interpolated
					}
				}
			}).concat({
				from: '**/*',
				context: 'src/static',
				to: ''
			})
		)
	]
}

module.exports = config
