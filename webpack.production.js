const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          publicPath: '../images',
          name: '[name].[ext]',
        },
      },
		]
	},
	plugins: [
		//new GenerateSW()
	],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});