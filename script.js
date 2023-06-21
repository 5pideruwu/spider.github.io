window.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');
    var username;

    setUsername();
    loadMessages();

    sendButton.addEventListener('click', function() {
        var message = messageInput.value;
        if (message && username) {
            appendMessage(username, message);
            saveMessage(username, message);
            messageInput.value = '';
        }
    });

    function setUsername() {
        username = prompt('Please enter your username:');
        if (username) {
            alert('Username set as: ' + username);
        } else {
            setUsername();
        }
    }

    function appendMessage(sender, message) {
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = '<strong>' + sender + ':</strong> <pre>' + message + '</pre>';
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function saveMessage(sender, message) {
        var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ sender: sender, message: message });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    function loadMessages() {
        var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        for (var i = 0; i < messages.length; i++) {
            appendMessage(messages[i].sender, messages[i].message);
        }
    }
});
