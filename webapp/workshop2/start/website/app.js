
// TODO: 1. create angular module here

// TODO: 20. create factory for socket.io 'socket' service

// TODO: 21. create factory for 'todoLists' service
    // TODO: 26. implement 'get(id)'
    // TODO: 27. implement 'update(id, items)'

// TODO: 28. add 'todoLists' and '$location' dependencies
// TODO: 2. create 'TodoController'
    // TODO: 3. init items
    // TODO: 29. check to see if 'id' query param is set
        // TODO: 30. if so, get list from 'todoLists' service
        // TODO: 31. if not, add new 'id' to query param
    // TODO: 32. implement update function
    // TODO: 33.1 add update function
    // TODO: 4. implement addNewItem function
    // TODO: 33.2 add update function
    // TODO: 5. implement toggleEdit function
    // TODO: 33.3 add update function
    // TODO: 6. implement removeItem function













//_______________________________IGNORE_THIS_____________
// Generates a uuid                                     |
// Taken from stackoverflow                             |
// Don't worry about how it works                       |
// Just know that it makes a pseudo unique identifier   |
function uuid() { //                                    |__________________________________________
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { //                |
    var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8); //  |
    return v.toString(16);}); //                                                                   |
} //                                                                                               |
//                                                                                                 |
