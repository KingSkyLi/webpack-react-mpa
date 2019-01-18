const path = require('path');
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
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/
        }]
    },
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
module.exports = baseConfig;