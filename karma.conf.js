"use strict";
const path = require("path");
const webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
	config.set({
		frameworks: ["mocha"],
		files: ["test/*.js"],
		plugins: [
			"karma-babel-preprocessor",
			"karma-webpack",
			"karma-mocha",
			"karma-phantomjs-launcher",
			"karma-chrome-launcher",
			"karma-coverage",
			"karma-spec-reporter"
		],
		resolve: {
			extensions: ['.json', '.js']
		},
		browsers: ["Chrome", "PhantomJS"],
		preprocessors: {
			// "src/*.js": ["coverage", "webpack"],
			"test/*.js": ["webpack", "coverage"]
		},
		reporters: ["spec", "coverage"],
		coverageReporter: {
			dir: "coverage",
			reporters: [{
				type: "text-summary",
			}, {
				type: 'text',
				file: 'coverage.txt'
			}]
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