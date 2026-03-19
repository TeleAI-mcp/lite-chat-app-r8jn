// Core module for Lite Chat App
export class ChatCore {
  constructor() {
    this.messages = [];
  }
  
  sendMessage(message) {
    this.messages.push(message);
    return message;
  }
  
  getMessages() {
    return this.messages;
  }
}