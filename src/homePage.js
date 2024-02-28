import { openModal, scrollToDiv, typewords ,appendUserMessage,appendBotDiv ,mobileChat} from "./utils";

export default function initHomePage() {
  console.log('Initializing home page logic');
  // Home page specific JavaScript here
  typewords();
  openModal();
  scrollToDiv('gb-bot-scrolldown')
  
  appendUserMessage('Tell me about animal charities that specifically help seals and turtles')


  appendBotDiv('I am a chatbot. How can I help you?')

  mobileChat()
}