const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
function loaders(type) {
    let defaultType = [{
        loader: "css-loader",
        options: {// some options
            sourceMap: true,
            minimize: true
        }
    },
    {// fix the css3
        loader: "postcss-loader",
        options: {
            sourceMap: true
        }
    }]
    switch (type) {
        case 'less':
            defaultType.push({
                loader: "less-loader",
                options: {
                    sourceMap: true
                }
            })
            break;
        case 'stylus':
            defaultType.push({
                loader: "stylus-loader",
                options: {
                    sourceMap: true
                }
            })
            break;
        case 'sass':
            defaultType.push({
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            })
            break;
        default:
            break;
    }
    return defaultType
}
module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: loaders(),
                            fallback: 'vue-style-loader'
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: loaders('sass'),
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: loaders('sass'),
                            fallback: 'vue-style-loader'
                        }),
                        less: ExtractTextPlugin.extract({
                            use: loaders('less'),
                            fallback: 'vue-style-loader'
                        }),
                        styl: ExtractTextPlugin.extract({
                            use: loaders('stylus'),
                            fallback: 'vue-style-loader'
                        }),
                        stylus: ExtractTextPlugin.extract({
                            use: loaders('stylus'),
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: loaders(),
                    fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: loaders('less'),
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(styl|stylus)$/,
                use: ExtractTextPlugin.extract({
                    use: loaders('stylus'),
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: loaders('sass'),
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpg|png|ico|jpeg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "../images/",
                        outputPath: "images/"
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "../fonts/",
                        outputPath: "fonts/"
                    }
                }]
            }
        ]
    }
}