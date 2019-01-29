const path = require('path');
module.exports = {
    target:'node',
    entry:{
        server:path.resolve(__dirname,'./node-server/node-server.js')
    },
    output:{
        path: path.resolve(__dirname, 'server'),
        filename: '[name].js',
    }
}