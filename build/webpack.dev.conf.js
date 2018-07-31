var config = require('./webpack.base.conf.js')
const merge = require('merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

config = merge(config, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/js'),
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            // 发送到本地代理服务器上由代理服务器转发到后台接口获得接口数据
            '/reqxml*': {
                target: 'http://localhost:81/reqxml',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            },
            // 本地mock数据代理
            '/mock': {
                target: 'http://localhost:1992',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            },
        }
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin({// defining the css output file
            filename: './css/style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
})
module.exports = config