var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var fs = require('fs');
console.log((path.resolve(__dirname,'../dist/index.html')));
app.use(express.static((path.resolve(__dirname,'../dist/'))));
app.use('/api/weather',require('./business-component-server/weather-server.js'));

app.get('/', function (req, res) {
    res.sendfile((path.resolve(__dirname,'../dist/index.html')));
});

app.get('/detail', function (req, res) {
    
});

http.listen(3000, function () {
    console.log('listening on *:3000');
})