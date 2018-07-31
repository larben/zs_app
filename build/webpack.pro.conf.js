var config = require('./webpack.base.conf.js')
const merge = require('merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

config = merge(config, {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist/js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                // node_modules
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                },
               //打包第三方类库
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: Infinity
                }
            },
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin('dist', {
            root: path.resolve(__dirname, "../")
        }),
        new ExtractTextPlugin({// defining the css output file
            filename: './css/style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({ template: './index.html' }),
    ]
})
module.exports = config