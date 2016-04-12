
function greet() {

    var history = document.getElementById('history');
    var msgInput = document.getElementById('message');
    var greeting = document.getElementById('greeting');

    var msg = msgInput.value;
    msgInput.value = '';

    var lastGreeting = greeting.textContent;
    greeting.textContent = msg;

    if (lastGreeting) {

        var historicalGreeting = document.createElement('div');

        historicalGreeting.textContent = lastGreeting;

        history.appendChild(historicalGreeting);
    }
}
