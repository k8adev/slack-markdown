const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	node: {
		global: true
	},
	output: {
		filename: 'slack-markdown.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	plugins: [
		new webpack.ProvidePlugin({
			window: {},
		}),
	]
};
