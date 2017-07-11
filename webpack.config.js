const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: "./index.js",
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		new HTMLWebpackPlugin(),
		new webpack.NamedModulesPlugin()
	],
	module: {
		exprContextCritical: false,
		rules: [
			{
				test: require.resolve("jquery"),
				use: [
					{
						loader: "expose-loader",
						options: "jQuery"
					},
					{
						loader: "expose-loader",
						options: "$"
					}
				]
			}
		]
	}
};
