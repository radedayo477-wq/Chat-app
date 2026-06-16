const johnSelectorBtn = document.querySelector('#john-selector');
const janeSelectorBtn = document.querySelector('#jane-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatButton = document.querySelector('.clear-chat-button');

const m

const clearChat = () => {
    localStorage.removeItem('messages')
    chatMessages.innerHTML = ''
}

const createchatMessageElement = (message) => 
    `<div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-time">${message.timestamp}</div>
    </div>
    `

    let messageSender = 'john'
    const updateMessagesSender = (name) => {
        messageSender = name
        chatHeader.textContent = ` ${messageSender} chatting...`
        chatInput.placeholder = `Type here ${messageSender}...`

        if(name === 'John') {
            johnSelectorBtn.classList.add('active-person')
            janeSelectorBtn.classList.remove('active-person')
        }
        if(name === 'Jane') {
            janeSelectorBtn.classList.add('active-person')
            johnSelectorBtn.classList.remove('active-person')
        }

        chatInput.focus  () 
    }

    johnSelectorBtn.onclick = () => updateMessagesSender('John')
    janeSelectorBtn.onclick = () => updateMessagesSender('Jane')

const sendMessage = (e) => {
e.preventDefault()

const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const message = {
    sender: 'messageSender',
    text: chatInput.value,
    timestamp,
}

messages.push(message)
localStorage.setItem('messages', JSON.stringify('messages'))
chatMessages.innerHTML += createchatMessageElement(message)

chatInputForm.reset()
chatMessages.scrollTop = chatMessages.scrollHeight
}


chatInputForm.addEventListener('submit', sendMessage)