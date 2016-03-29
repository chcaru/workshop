
var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);
app.use('/', express.static('./website'));
server.listen(80);
console.log("Started. Don't close this!");


// Step 6. Socket.io on socket connection
    // Step 7. On receive message from socket, send that message to everyone else
