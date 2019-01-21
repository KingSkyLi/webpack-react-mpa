const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const pagesConfig = require('./pages.config.js');

const rewrites = [];
pagesConfig.pages.forEach(element => {
    let name = element.name;
    let opt = {
        from: new RegExp(`^\/${name}$`),
        to: `/${name}.html`
    }
    rewrites.push(opt);
});
rewrites.push({
    from: /./,
    to: '/404.html'
});

const devConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: '9100',
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: {
            errors: true
        },
        historyApiFallback: {
            rewrites,
        },
        hot: true,
    },
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
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                },
            }, ],
        }, {
            test: /\.css|less$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'style-loader',
                options: {
                    singleton: true
                }
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[path][name]-[local]-[hash:base64:5]'
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
            exclude: /(src)/,
            use: [{
                loader: 'style-loader',
                options: {
                    singleton: true
                }
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader'
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}
module.exports = merge([devConfig, ...pagesConfig.pageEntrys]);