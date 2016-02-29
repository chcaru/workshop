
var http = require('http');
var express = require('express');
var app = express();

var server = http.Server(app);
var io = require('socket.io')(server);
app.use('/', express.static('./website'));

server.listen(80);

console.log("Started. Don't close this!");

// TODO: 22. init lists object

// TODO: 23. implement on socket connection
    // TODO: 24. implement on socket get
    // TODO: 25. implement on socket update
