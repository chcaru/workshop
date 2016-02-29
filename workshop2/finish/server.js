
var http = require('http');
var express = require('express');
var app = express();

var server = http.Server(app);
var io = require('socket.io')(server);
app.use('/', express.static('./website'));

server.listen(80);

console.log("Started. Don't close this!");

var lists = { };

io.on('connection' , socket => {
   
   socket.on('get', (id, callback) => callback(lists[id]));
   
   socket.on('update', todoList => lists[todoList.id] = todoList.items);
    
});