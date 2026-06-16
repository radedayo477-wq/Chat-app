const johnSelectorBtn = document.querySelector('#john-selector');
const janeSelectorBtn = document.querySelector('#jane-selector');

const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');

const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');

const clearChatButton = document.querySelector('.clear-chat-button');



// Load saved messages

let messages = JSON.parse(localStorage.getItem("messages")) || [];




// Create message element

const createChatMessageElement = (message) => {

    return `

    <div class="message ${message.sender === "John" ? "blue-bg" : "gray-bg"}">

        <div class="message-sender">
            ${message.sender}
        </div>


        <div class="message-text">
            ${message.text}
        </div>


        <div class="message-time">
            ${message.timestamp}
        </div>

    </div>

    `;

};






// Display old messages when page loads

window.onload = () => {


    messages.forEach((message)=>{

        chatMessages.innerHTML += 
        createChatMessageElement(message);

    });


    chatMessages.scrollTop = chatMessages.scrollHeight;

};






// Current sender

let messageSender = "John";







// Change sender

const updateMessageSender = (name)=>{


    messageSender = name;


    chatHeader.textContent =
    `${messageSender} chatting...`;


    chatInput.placeholder =
    `Type here ${messageSender}...`;




    if(name === "John"){


        johnSelectorBtn.classList.add("active-person");

        janeSelectorBtn.classList.remove("active-person");


    }




    if(name === "Jane"){


        janeSelectorBtn.classList.add("active-person");

        johnSelectorBtn.classList.remove("active-person");


    }



    chatInput.focus();

};






// Select users

johnSelectorBtn.onclick = ()=>{

    updateMessageSender("John");

};



janeSelectorBtn.onclick = ()=>{

    updateMessageSender("Jane");

};









// Send message


const sendMessage = (e)=>{


    e.preventDefault();



    const text = chatInput.value.trim();



    if(text === ""){

        return;

    }




    const timestamp = new Date()
    .toLocaleTimeString("en-US",{

        hour:"numeric",

        minute:"numeric",

        hour12:true

    });







    const message = {


        sender: messageSender,


        text:text,


        timestamp:timestamp


    };





    // Save message

    messages.push(message);


    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );





    // Display message

    chatMessages.innerHTML += 
    createChatMessageElement(message);





    chatInputForm.reset();



    chatMessages.scrollTop =
    chatMessages.scrollHeight;


};







chatInputForm.addEventListener(
    "submit",
    sendMessage
);









// Clear chat


const clearChat = ()=>{


    messages = [];


    localStorage.removeItem("messages");


    chatMessages.innerHTML = "";


};





clearChatButton.onclick = clearChat;






// Start application

updateMessageSender("John");