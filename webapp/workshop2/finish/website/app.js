
// Create the angular app 'todo'
// We use this module name when bootstraping
// with ng-app="todo" in the html
var app = angular.module('todo', []);

// Creates a socket service that connects
// to our node server's socket.io instance
// at a low level (exposes the socket.io client)
app.factory('socket', () => io.connect('http://localhost'));

// Creates a high level 'todoLists' service that
// abstracts away the detail of obtaining and
// saving a todo list.
// It does this by interfacing with the low level 'socket'
// service we made earlier
app.factory('todoLists', ['socket', socket => ({

    // Obtains a todo list by its id using the socket
    get: id => {
        var deferred = Promise.defer();
        socket.emit('get', id, items => deferred.resolve(items));
        return deferred.promise;
    },

    // Saves a todo list associated with its id
    // Notice it strips the items of their state
    // specific properties, as these should not
    // be saved (unless you did...)
    update: (id, items) => socket.emit('update', {
        id: id,
        items: items.map(i => ({ text: i.text }))
    })

})]);

// Creates the 'TodoController' which is attached to
// an element using ng-controller="TodoController"
// This allows the scope of the controller to be attached to
// children of the element so we can do angular things like
// ng-model, ng-show, ect...
// It has dependencies on 'todoLists' (described earlier) and
// '$location' (angular service)
app.controller('TodoController', ['$scope', 'todoLists', '$location', (scope, todoLists, location) => {

    // init with empty todo list
    scope.items = [];

    // Check to see if there is an 'id' query param
    if (location.search().id) {

        // Obtain the todo list using the id query param
        todoLists.get(location.search().id).then(items => {

            // init state properties (none should in edit or focused)
            scope.items = items.map(i => ({
                text: i.text,
                edit: false,
                focus: false
            }));

            // Since the todoLists.get is async, we need to let
            // angular know to update since it's probably outside
            // of the normal digest cycle
            scope.$apply();
        });

    } else {

        // Set 'id' query param with an new uuid (unique identifier)
        // This is so we can universally identify the todo list
        // and obtain it above if it exists
        location.search({ id: uuid() });

    }

    // Shortcut to update the server with the most
    // up-to-date list
    var update = () => todoLists.update(location.search().id, scope.items);

    // Called when the '+' button is clicked
    scope.addNewItem = () => {

        // Adds a new blank item to the end of the items list
        scope.items.push({
            text: '',
            edit: true, // init with edit state
            focus: false
        });

        // Let the server know about the update
        update();
    };

    // Called when an item id double clicked
    scope.toggleEdit = item => {

        // Toggle edit state
        item.edit = !item.edit;

        // Update when the edit state is changed
        // Note this is not to save the edit state,
        // but to save what was edited (exit edit probably means
        // there was a change made to the list)
        // This is not optimal
        update();
    }

    // Called when an item's 'x' button is clicked
    scope.removeItem = item => {

        // Filter out the item to be removed
        scope.items = scope.items.filter(i => i != item);

        // Let the server know that something has changed
        update();
    };

}]);

// Generates a uuid
// Taken from stackoverflow
// Don't worry about how it works
// Just know that it makes a pseudo unique identifier
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);});
}
