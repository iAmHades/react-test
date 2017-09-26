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
			"karma-coverage-istanbul-reporter",
		],
		resolve: {
			extensions: ['.json', '.js']
		},
		browsers: ["Chrome", "PhantomJS"],
		preprocessors: {
			// "src/*.js": ["webpack", "babel"],
			"test/*.js": ["webpack", "babel"]
		},
		reporters: ["coverage-istanbul"],
		coverageIstanbulReporter: {
			reports: ['text-summary'],
			fixWebpackSourcePaths: true
		},
		webpack: {
			module: {
				rules: [{
					test: /\.js$/i,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				}, {
					test: /\.js$/,
					use: {
						loader: 'istanbul-instrumenter-loader',
						options: {
							esModules: true
						}
					},
					include: path.resolve('src/')
				}, {
					test: /\.svg$/,
					loaders: [
						'babel-loader', {
							loader: 'react-svg-loader',
							query: {
								jsx: true
							}
						}
					]
				}, {
					test: /\.json$/,
					loader: "json-loader"
				}]
			},
			externals: {
				'jsdom': 'window',
				'react/lib/ExecutionEnvironment': true,
				'react/addons': true,
				'react/lib/ReactContext': 'window',
				'sinon': 'window.sinon'
			}
		},
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true,
		concurrency: Infinity,
		autoWatch: false
	});
};