const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
    filename: 'slack-markdown.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
  resolve: {
    extensions: ['.js', '.ts']
  },
};
