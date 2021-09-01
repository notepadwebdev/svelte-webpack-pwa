const fs = require('fs');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [

		]
	},
	plugins: [

	],
	devtool: 'source-map',
	devServer: {
    publicPath: '/',
		hot: true,
		writeToDisk: true,
		// https: {
    //   key: fs.readFileSync('./key.pem'),
    //   cert: fs.readFileSync('./cert.pem'),
    // },
		// proxy: {
    //   '/api': {
    //     target: 'http://api.url.here',
    //     changeOrigin: true,
    //   },
    // },
	}
});