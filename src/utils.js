let displayText = ''
let words = ['Generating', 'Gathering', 'Researching']
let currentWordIndex = 0
const typingSpeed = 150
const deletingSpeed = 100
const pauseDuration = 1000

export function appendUserMessage(message) {
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

export function appendBotDiv(message) {
// Create bot message container and image outside the function
const chatContainer = document.getElementById('gb-chatbody');
const botDiv = document.createElement('div');
botDiv.className = 'gb-mt-5';
botDiv.id = "gb-bot";
const img = document.createElement('img');
img.src = "../public/giveorg.svg";
botDiv.appendChild(img);
const botFlex = document.createElement('div');
botFlex.id="botFlex-1"
botFlex.className = "gb-bg-[#ffff] gb-rounded "

botDiv.appendChild(botFlex);
chatContainer.appendChild(botDiv);

appendBotMessage(botFlex, message);
const botRefer = document.createElement('div');
botRefer.id="botRef-1"
botRefer.className = "gb-mt-2 gb-px-4 gb-flex gb-flex-wrap gb-space-x-0 md:gb-space-x-3"
botFlex.appendChild(botRefer);

}


export function appendBotMessage(botDiv,message) {
  // Create a <p> element
  const messageParagraph = document.createElement('p');
  messageParagraph.className = 'gb-p-4 gb-bg-[#ffff] gb-my-5 gb-rounded';
  // Set its text content to the message
  messageParagraph.textContent = message;
  // Append the <p> element to the botDiv
  botDiv.appendChild(messageParagraph);
}


export function appendReferences(){
  const botContainer = document.getElementById('botRef-1');

  const referenceLink = document.createElement('a');
  referenceLink.href = "/";

  const spanLink = document.createElement('span');
  spanLink.className = "gb-bg-[#FFD368] gb-space-x-2 gb-no-underline gb-hover:underline gb-text-xs gb-font-medium gb-inline-flex gb-items-center gb-px-2.5 gb-py-0.5 gb-rounded-lg";
  

  const referenceImg = document.createElement('img');
  referenceImg.src = "../public/book.svg";
  spanLink.appendChild(referenceImg);
 

  const referenceText = document.createElement('p');
  referenceText.textContent = "Heart of Giving Kelley Bevis";
  referenceText.className="hover:gb-underline"

  spanLink.appendChild(referenceText);



  referenceLink.appendChild(spanLink);



  botContainer.appendChild(referenceLink);
  // botContainer.appendChild(messageActionsDiv);
}

export function appendAction(){
  // Actions 
const botContainer = document.getElementById('botFlex-1');
const messageActionsDiv = document.createElement('div');
messageActionsDiv.className = "gb-px-4 gb-my-2 gb-pb-3"
messageActionsDiv.id="gb-message-actions-1"

// Reload button
const reloadActionsButton = document.createElement('button');
reloadActionsButton.className = "hover:gb-bg-[#E4E4E4] gb-p-2.5 gb-rounded-full";
const reloadImg = document.createElement('img');
reloadImg.src = "../public/reload.svg";
reloadActionsButton.appendChild(reloadImg);
reloadActionsButton.id="gb-message-actions-2"
messageActionsDiv.appendChild(reloadActionsButton);

    // Report button
    const reportActionsButton = document.createElement('button');
    reportActionsButton.className = "hover:gb-bg-[#E4E4E4] gb-p-2.5 gb-rounded-full";
    const reportImg = document.createElement('img');
    reportImg.src = "../public/report.svg";
    reportActionsButton.appendChild(reportImg);
    reportActionsButton.id="gb-message-actions-2"
    messageActionsDiv.appendChild(reportActionsButton);

    botContainer.appendChild(messageActionsDiv);
}






export function scrollToDiv(idname) {
  const targetDiv = document.getElementById(idname);
  targetDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

export function mobileChat(){
  var maximizeChat = document.getElementById("gb-maximize");
  var miniButton = document.getElementById("gb-miniButton");
  var miniChat = document.getElementById("gb-halfchat");

  var minimizeChat = document.getElementById("gb-minize");
  
  maximizeChat.onclick = function() {
  
    miniButton.classList.add("gb-hidden");
    miniChat.classList.remove("gb-hidden")
  }

  minimizeChat.onclick = function() {
  
    miniChat.classList.add("gb-hidden");
    miniButton.classList.remove("gb-hidden")
  }
}


// FeedBack Modal

export function openModal (){
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


  // typing animation

  async  function  typeword(currentText, wordIndex) {
    for (let i = 0; i < currentText.length; i++) {
      if (currentWordIndex !== wordIndex) return;
      displayText = currentText.substr(0, i + 1);
      // console.log(displayText);
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
      // console.log(displayText);
      await sleepword(deletingSpeed);
    }
  }

  async function sleepword(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    });
  }

  export async function typewords (){


    // eslint-disable-next-line no-constant-condition
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