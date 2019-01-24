var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var fs = require('fs');

app.use(express.static(path.resolve('dist')));

app.use('/api/weather',require('./business-component-server/weather-server.js'));

app.get('/', function (req, res) {
    res.sendfile((path.resolve('dist/index.html')));
});

app.get('/detail', function (req, res) {
    fs.readFile(path.join(__dirname, '../dist/detail.html'), 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        res.end(data);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
})