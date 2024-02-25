import './styles.css';

let displayText = ''
let words = ['Generating', 'Gathering', 'Researching']
let currentWordIndex = 0
const typingSpeed = 150
const deletingSpeed = 100
const pauseDuration = 1000
const isDeleting = false

document.addEventListener('DOMContentLoaded', function() {
  openModal()
  appendUserMessage('Tell me about animal charities that specifically help seals and turtles')
  
  typewords()
  appendBotDiv('I am a chatbot. How can I help you?')
  document.getElementById('chatbot-send').onclick = function() {
      var input = document.getElementById('chatbot-input');
      var message = input.value;
      input.value = ''; // Clear input after sending
  
      // Display the user's message
      var userMessage = document.createElement('div');
      userMessage.textContent = "You: " + message;
      document.getElementById('chatbot-messages').appendChild(userMessage);
  
      // Here you would add the logic to send the message to your chatbot service
      // and then display the chatbot's response similarly.
      // This is a placeholder for where you would handle the chatbot response.
      var botResponse = document.createElement('div');
      botResponse.textContent = "Bot: This is a static response. Integrate with your chatbot logic.";
      document.getElementById('chatbot-messages').appendChild(botResponse);
  };
  
  document.getElementById('chatbot-icon').onclick = function() {
      // Show the chatbot container
      document.getElementById('chatbot-container').style.display = 'block';
      // Hide the chat icon
      document.getElementById('chatbot-icon').style.display = 'none';
  };
  
  document.getElementById('chatbot-minimize').onclick = function() {
      // Hide the chatbot container
      document.getElementById('chatbot-container').style.display = 'none';
      // Show the chat icon
      document.getElementById('chatbot-icon').style.display = 'block';
  };
  
  // Initially show the chat icon
  document.getElementById('chatbot-icon').style.display = 'block';
  
  });



  function appendUserMessage(message) {
    const chatContainer = document.getElementById('gb-chatbody');
    const userDiv = document.createElement('div');
    userDiv.className = 'gb-p-4 gb-mt-5 gb-bg-gradient-to-r gb-text-white gb-rounded gb-from-blue-500 gb-via-blue-700 gb-to-green-500 ';
    userDiv.id = "gb-user"
    
    // Create a <p> element
    const messageParagraph = document.createElement('p');
    // Set its text content to the message
    messageParagraph.textContent = message;
    // Append the <p> element to the userDiv
    userDiv.appendChild(messageParagraph);
    
    // Append the userDiv to the chatContainer
    chatContainer.appendChild(userDiv);

  }

  function appendBotDiv(message) {
  // Create bot message container and image outside the function
  const chatContainer = document.getElementById('gb-chatbody');
  const botDiv = document.createElement('div');
  botDiv.className = 'gb-mt-5';
  botDiv.id = "gb-bot";
  const img = document.createElement('img');
  img.src = "../public/giveorg.svg";
  botDiv.appendChild(img);
  chatContainer.appendChild(botDiv);

  appendBotMessage(botDiv, message);
  }


  function appendBotMessage(botDiv,message) {
    // Create a <p> element
    const messageParagraph = document.createElement('p');
    messageParagraph.className = 'gb-p-4 gb-bg-[#ffff] gb-my-5 gb-rounded';
    // Set its text content to the message
    messageParagraph.textContent = message;
    // Append the <p> element to the botDiv
    botDiv.appendChild(messageParagraph);
}




  // typing animation

  async  function  typeword(currentText, wordIndex) {
    for (let i = 0; i < currentText.length; i++) {
      if (currentWordIndex !== wordIndex) return;
      displayText = currentText.substr(0, i + 1);
      console.log(displayText);
      //append text
      //document.getElementById('gb-bot-loading').appendChild(document.createTextNode(displayText));
    //  document.getElementById('gb-bot-loading').value = displayText;
    document.getElementById('gb-bot-loading').innerHTML = displayText;
      await sleepword(typingSpeed);
    }
  }
  
  async function deleteword(currentText, wordIndex) {
    for (let i = currentText.length; i > 0; i--) {
      if (currentWordIndex !== wordIndex) return;
      displayText = currentText.substr(0, i - 1);
      // document.getElementById('gb-bot-loading').appendChild(document.createTextNode(displayText));
      // document.getElementById('gb-bot-loading').value = displayText;
      document.getElementById('gb-bot-loading').innerHTML = displayText;
      console.log(displayText);
      await sleepword(deletingSpeed);
    }
  }

  async function sleepword(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    });
  }

  async function typewords (){


    while (true) {
      const currentText = words[currentWordIndex];
      const wordIndex = currentWordIndex;
      await typeword(currentText, wordIndex);
      await sleepword(pauseDuration);
      await deleteword(currentText, wordIndex);
      await sleepword(pauseDuration);
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  }

  function openModal (){
      // Get modal element
  var modal = document.getElementById("myModal");
  // Get button that opens the modal
  var btn = document.getElementById("gb-feedback"); // You need to add this button in your HTML
  // Get the element that closes the modal
  var closeModal = document.getElementById("closeModal");
  var closeButton = document.getElementById("closeButton");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    console.log("click me");
    modal.classList.remove("gb-hidden");
  }

  // When the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
    modal.classList.add("gb-hidden");
  }

  // Also close when clicking the close button
  closeButton.onclick = function() {
    modal.classList.add("hidden");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  }
  }