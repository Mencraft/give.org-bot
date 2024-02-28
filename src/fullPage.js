import { openModal, scrollToDiv, typewords } from "./utils";

export default function initFullScreenPage() {
  typewords();
  openModal();
  scrollToDiv('gb-bot-scrolldown')

}