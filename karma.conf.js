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
			// "karma-chrome-launcher",
			"karma-coverage-istanbul-reporter",
			"karma-mocha-reporter"
		],
		resolve: {
			extensions: ['.json', '.js','.png']
		},
		// browsers: ["Chrome", "PhantomJS"],
		browsers: ["PhantomJS"],
		preprocessors: {
			"test/*.js": ["webpack", "babel"]
		},
		scssPreprocessor: {
			options: {
				sourceMap: true,
				includePaths: ['bower_components']
			}
		},
		reporters: ["coverage-istanbul", "mocha"],
		coverageIstanbulReporter: {
			reports: ['text-summary','html'],
			fixWebpackSourcePaths: true
		},
		mochaReporter: {
			colors: {
				success: 'blue',
				info: 'bgGreen',
				warning: 'cyan',
				error: 'bgRed'
			},
			symbols: {
				success: '+',
				info: '#',
				warning: '!',
				error: 'x'
			}
		},
		webpack: {
			module: {
				rules: [{
					test: /\.js$/i,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader'
					},{
						loader: 'istanbul-instrumenter-loader',
						options: {
							esModules: true
						}
					}]

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
				}, {
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader',
					exclude:'/images/'
					// include: path.resolve('src/')
				}, 
				{
					test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
					loader: 'url-loader?limit=8192&name=images/[name]-[hash:8].[ext]'
				}
				]
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