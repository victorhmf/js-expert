import MessageSender from "../base/messageSender.js";

export default class WhatsappMessageSender extends MessageSender {
  async send() {
    //using whatsapp api
    const {from, to, content} = this.message
    console.log(`Sending whatsapp message to ${to}, from ${from}, content: ${content}`)
  }
}