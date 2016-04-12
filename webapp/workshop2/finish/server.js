
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

// This will act as our quick and dirty
// database, to hold all of the todo lists.
// The todo lists are stored by their id.
// If a list's id is 'id' then lists[id]
// will obtain that todo list.
// It is empty to begin with
var lists = { };

// This tells socket.io to listen for forward
// a connection's socket to this function EVERYTIME
// a new connection is made. So for each connection,
// there is a socket, and this function is invoked for
// each of them
io.on('connection' , socket => {

    // This lambda is called when the socket receives
    // a 'get' event from the client (app.js: line 22).
    // The client sends the id of the todo list it is requesting,
    // and expects a response, to respond, we call callback with
    // what the list in our lists object
    socket.on('get', (id, callback) => callback(lists[id]));

    // When the socket receives an 'update' event,
    // this labmda receives the todoList object given
    // to it by the client. It looks like this:
    // {
    //     id: '35345235',
    //     items: [ /* ...item objects... */]
    // }
    // The list is then set to its id on the lists object
    // so it can then be retrieved in 'get' (above, line 51)
    socket.on('update', todoList => lists[todoList.id] = todoList.items);

});
