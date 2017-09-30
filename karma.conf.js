"use strict";
const path = require("path");
const webpackConfig = require("./webpack.config.js");

//扩展
webpackConfig.externals = {
	"jsdom": "window",
	"react/lib/ExecutionEnvironment": true,
	"react/addons": true,
	"react/lib/ReactContext": "window",
	"sinon": "window.sinon"
}

webpackConfig.module.rules.push({
	test: /\.js$|\.jsx$/,
	use: {
		loader: 'istanbul-instrumenter-loader',
		options: {
			esModules: true
		}
	},
	enforce: 'post',
	exclude: /node_modules|\.spec\.js$/,
})

module.exports = function(config) {
	config.set({
		frameworks: ["mocha"],
		files: ["test/*.js"],
		plugins: [
			"karma-webpack",
			"karma-mocha",
			"karma-phantomjs-launcher",
			"karma-coverage-istanbul-reporter",
			"karma-mocha-reporter"
		],
		resolve: {
			extensions: [".json", ".js", ".png"]
		},
		browsers: ["PhantomJS"],
		preprocessors: {
			// "src/*.js": ["webpack"],
			"test/*.js": ["webpack"]
		},
		reporters: ["coverage-istanbul", "mocha"],
		coverageIstanbulReporter: {
			reports: ["text-summary", "html"],
			fixWebpackSourcePaths: true
		},
		mochaReporter: {
			colors: {
				success: "blue",
				info: "bgGreen",
				warning: "cyan",
				error: "bgRed"
			},
			symbols: {
				success: "+",
				info: "#",
				warning: "!",
				error: "x"
			}
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true,
		concurrency: Infinity,
		autoWatch: false
	});
};