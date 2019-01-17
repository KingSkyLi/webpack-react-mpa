const Pages = require('./pages.config.js');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = {
    entry: {
        index: './src/pages/index/index.js',
        detail: './src/pages/detail/detail.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    plugins: [

    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                }
            }
        }
    }
}
module.exports =merge([baseConfig,...Pages]);

