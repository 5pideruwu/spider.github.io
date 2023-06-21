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
            saveMessages();
            messageInput.value = '';
        }
    });

    function setUsername() {
        username = prompt('Please enter your username:');
        if (username) {} else {
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

    function saveMessages() {
        var messages = chatMessages.innerHTML;
        localStorage.setItem('chatMessages', messages);
    }

    function loadMessages() {
        var messages = localStorage.getItem('chatMessages');
        if (messages) {
            chatMessages.innerHTML = messages;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
});