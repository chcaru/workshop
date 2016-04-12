
// Obtain dependencies using require.
// These must be installed prior with npm:
//     cd ..
//     npm install
var http = require('http');
var express = require('express');
var app = express();

// Creates an http server using express' app
var server = http.Server(app);

// Initialize socket.io with our server
var io = require('socket.io')(server);

// Let express know that we want to serve
// static content from the 'website' directory
app.use('/', express.static('./website'));

// Listen on port 80
// If port 80 is in use, this means that you have
// another web server using it most likely.
// Either close it, or you can change this.
// To access the site with a new port 13337 (for example),
// you would navigate to: http://localhost:13337
// server.listen(13337); // Alternative port if 80 doesn't work
server.listen(80);

console.log("Started. Don't close this!");

// This tells socket.io to listen for forward
// a connection's socket to this function EVERYTIME
// a new connection is made. So for each connection,
// there is a socket, and this function is invoked for
// each of them
io.on('connection', socket => {

    socket.on('sendMsg', msg => io.emit('msg', msg));

});
