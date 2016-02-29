
var app = angular.module('todo', []);

app.controller('TodoController', ['$scope', scope => {

    scope.items = [];

    scope.addNewItem = () => scope.items.push({
        text: '',
        edit: true,
        focus: false
    });

    scope.toggleEdit = item => item.edit = !item.edit;

    scope.removeItem = item => scope.items = scope.items.filter(i => i != item);

}]);
