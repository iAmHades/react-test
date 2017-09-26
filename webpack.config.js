const path = require('path')
const webpack = require('webpack')
const amwWebpack = require('antd-mobile-web/webpack')

const resolve = (...p) => path.resolve(__dirname, ...p)
const join = (...p) => path.join(__dirname, ...p)
const moduleDir = m => path.dirname(require.resolve(`${m}/package.json`))

module.exports = {
    entry: {
        app: resolve('src', 'app')
    },

    output: {
        filename: '[name].js',
        path: join('dist'),
        publicPath: '/dist'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },

    module: {
        rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            amwWebpack.createSvgRule()
        ]

    },
    externals: {
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': 'window',
        'sinon': 'window.sinon'
    }
}