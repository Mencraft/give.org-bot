import { openModal, scrollToDiv,appendAction,appendReferences, typewords ,appendUserMessage,appendBotDiv ,mobileChat} from "./utils";

export default function initHomePage() {
  console.log('Initializing home page logic');
  // Home page specific JavaScript here
  typewords();
  openModal();
  scrollToDiv('gb-bot-scrolldown')
  
  appendUserMessage('Tell me about animal charities that specifically help seals and turtles')


  appendBotDiv('I am a chatbot. How can I help you?')
  appendReferences()
  appendAction()
  mobileChat()

  const gbform = document.getElementById('gb-form');
  const gbloader = document.getElementById('gb-bot-loader');
  // Add event listener to form
   gbform.addEventListener('submit', (event) => {
     event.preventDefault();
     console.log('CLicked me');
     gbloader.classList.remove("gb-hidden");
   })
}