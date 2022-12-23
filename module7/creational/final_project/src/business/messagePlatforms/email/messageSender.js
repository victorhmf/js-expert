import MessageSender from "../base/messageSender.js";

export default class EmailMessageSender extends MessageSender {
  async send() {
    //using email api
    const {from, to, content} = this.message
    console.log(`Sending email message to ${to}, from ${from}, content: ${content}`)
  }
}