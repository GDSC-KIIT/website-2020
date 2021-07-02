const path = require('path');
require('webpack');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'worker.js',
		path: path.join(__dirname, 'dist'),
	},
	mode,
	resolve: {
		extensions: ['.ts', '.js'],
		plugins: [],
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
		],
	},
};
