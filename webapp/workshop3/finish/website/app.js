
var app = angular.module('liveChat', ['ngMaterial']);

app.factory('socket', () => io.connect('http://localhost'));

app.controller('ChatController', ['$scope', '$mdDialog', 'socket', (scope, mdDialog, socket) => {

    scope.messages = [];

    scope.text = '';

    scope.send = () => {

        socket.emit('sendMsg', {
            name: scope.name,
            text: scope.text
        });

        scope.text = '';
    };

    socket.on('msg', message => {
        scope.messages.unshift(message);
        scope.$apply();
    });

    var getNameDialog = mdDialog.prompt()
        .title("Hey there! What do you want your name to be?")
        .placeholder('Nickname')
        .ok("That's me!")
        .cancel('Make me Anonymous');

    mdDialog.show(getNameDialog).then(
        result => scope.name = result,
        () => scope.name = 'Anonymous'
    );

}]);
