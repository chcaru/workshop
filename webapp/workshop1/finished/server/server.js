
var http = require('http');
var express = require('express');
var app = express();

var server = http.Server(app);

app.use('/', express.static('../website'));

server.listen(80);

console.log("Started. Don't close this!");
