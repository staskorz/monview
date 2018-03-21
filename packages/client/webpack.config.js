/* eslint-env node */

const webpack = require('webpack')
const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',

						query: {
							presets: [['env', { modules: false }], 'react'],
							plugins: ['react-hot-loader/babel'],
							babelrc: false,
						},
					},
				],
			},
		],
	},

	context: __dirname,

	devServer: {
		contentBase: __dirname,
		hot: true,
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],

	output: {
		path: path.join(__dirname, 'dist'),
	},
}
