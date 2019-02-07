const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pagesConfig = require('./pages.config');
const prodConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: '/',
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[chunkhash].css",
            chunkFilename: "static/css/[name].[chunkhash].css"
        }),
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            options: {
                "plugins": [
                    ["import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": "css" // `style: true` 会加载 less 文件
                    }]
                ]
            }
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: 'static/images'
                    }
                },
                // {
                //     loader: "img-loader",
                //     options: {
                //         plugins: [
                //             require("imagemin-pngquant")({
                //                 quality: "80"
                //             })
                //         ]
                //     }
                // }
            ],
        }, {
            test: /\.css|less/,
            include: /(src)/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[path][name]-[local]-[hash:base64:5]',
                    importLoaders: 2,
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        require('autoprefixer')(),
                    ]
                }
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.css|less$/,
            include: /(node_modules)/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    filename: '[name].css'
                }
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader'
            }]
        }]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-redux|redux|redux-thunk)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                    priority: 2
                },
                jquery: {
                    test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    name: 'jquery',
                    chunks: 'all',
                    priority: 2
                },
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vender',
                    chunks: 'all',
                    priority: 1
                }
            }
        },
    }
}
module.exports = merge([prodConfig, ...pagesConfig.pageEntrys]);