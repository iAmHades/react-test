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
            amwWebpack.createSvgRule(), {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
                // include: path.resolve('src/')
            }, {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8192&name=images/[name]-[hash:8].[ext]'
            }
        ]

    }
   
}