'use strict';

import { openModal, scrollToDiv, typewords } from "./utils";

export default function initFullScreenPage() {
  typewords();
  openModal();
  scrollToDiv('gb-bot-scrolldown')

  appendUserMessage('Tell me about animal charities that specifically help seals and turtles')
  appendBotDiv('I am a chatbot. How can I help you?')
  appendReferences()

const getCUrrentyear = document.getElementById('gb-current-year');
getCUrrentyear.textContent = new Date().getFullYear() + '©';

 const gbform = document.getElementById('gb-form');
 const gbloader = document.getElementById('gb-bot-loader');
 // Add event listener to form
  gbform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('CLicked me');
    gbloader.classList.remove("gb-hidden");
  })
}


 function appendUserMessage(message) {
  const chatContainer = document.getElementById('gb-chatbody');
  const userDiv = document.createElement('div');
  userDiv.className = 'gb-flex gb-flex-row-reverse  gb-my-4';
  userDiv.id = "gb-user"
  
  // Create a <p> element
  const messageParagraph = document.createElement('p');
  // Set its text content to the message
  messageParagraph.className = 'gb-p-4 gb-bg-gradient-to-r gb-text-white gb-rounded gb-from-blue-500 gb-via-blue-700 gb-to-green-500 ';
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
botDiv.className = 'gb-mt-5 gb-flex gb-flex-row gb-items-start gb-space-x-3';
botDiv.id = "gb-bot";
const img = document.createElement('img');
img.src = "../public/giveorg.svg";
botDiv.appendChild(img);
const botFlex = document.createElement('div');
botFlex.id="botFlex-1"
botFlex.className = "gb-bg-[#ffff] gb-rounded"
botDiv.appendChild(botFlex);
chatContainer.appendChild(botDiv);

appendBotMessage(botFlex, message);
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

function appendReferences(){
  const botContainer = document.getElementById('botFlex-1');
  const referencesDiv = document.createElement('div');
  referencesDiv.className = 'gb-mt-2 gb-px-4 gb-flex';
  referencesDiv.id="gb-references"

  const referenceDiv = document.createElement('div');
  referenceDiv.className = 'gb-bg-[#FFD368] gb-inline-flex gb-space-x-3 gb-rounded-lg  gb-items-center gb-p-3';
  const referenceLink = document.createElement('a');
  referenceLink.href = "/";
  referenceLink.className="hover:gb-underline"
  referenceLink.textContent = "Heart of Giving Kelley Bevis";
  
  const referenceImg = document.createElement('img');
  referenceImg.src = "../public/book.svg";
  referenceDiv.appendChild(referenceImg);
 

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

  

  referenceDiv.appendChild(messageActionsDiv);

  referenceDiv.appendChild(referenceLink);
  referencesDiv.appendChild(referenceDiv);

  botContainer.appendChild(referencesDiv);
  botContainer.appendChild(messageActionsDiv);
}


