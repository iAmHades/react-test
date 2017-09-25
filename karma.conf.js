"use strict";
const path = require("path");
const webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
	config.set({
		frameworks: ["mocha"],
		files: [
			"test/*.js"
		],
		plugins: [
		    "karma-babel-preprocessor",
			"karma-webpack",
			"karma-mocha",
			"karma-phantomjs-launcher",
			"karma-chrome-launcher",
			"karma-coverage",
			"karma-spec-reporter"
		],
		browsers: ["Chrome","PhantomJS"],
		preprocessors: {
			// "src/*.js": ["coverage", "webpack"],
			"test/*.js": ["webpack"]
		},
		reporters: ["spec", "coverage"],
		coverageReporter: {
			dir: "coverage",
			reporters: [
				{
					type: "json",
					subdir: ".",
					file: "coverage.json"
				},
				{
					type: "lcov",
					subdir: "."
				},
				{
					type: "text-summary"
				}
			]
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true,
		concurrency: Infinity
	});
};