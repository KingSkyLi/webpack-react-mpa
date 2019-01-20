const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pagesConfig = require('./pages.config');
const prodConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        publicPath:'/',
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "[id].css"
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
                options:{
                    filename:'[name].css'
                }
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader'
            }]
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'react',
                    chunks: 'all',
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin(),
        ],
    }
}
module.exports = merge([prodConfig, ...pagesConfig.pageEntrys]);