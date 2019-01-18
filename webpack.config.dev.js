const baseConfig = require('./webpack.config.base');
const pagesConfig = require('./pages.config.js');
const merge = require('webpack-merge');
const path = require('path');
const rewrites = [];
pagesConfig.pages.forEach(element => {
    let name = element.name;
    let opt = {
        from:new RegExp(`^\/${name}$`),
        to:`/${name}.html`
    }
    rewrites.push(opt);
});
rewrites.push({ from: /./,to: '/404.html'});
console.log(rewrites);
const devConfig = {
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
        }
    }
}
module.exports = merge([devConfig,baseConfig,...pagesConfig.pageEntrys]);