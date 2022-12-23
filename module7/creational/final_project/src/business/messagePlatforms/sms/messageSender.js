import MessageSender from "../base/messageSender.js";

export default class SMSMessageSender extends MessageSender {
  async send() {
    //using sms api
    const {from, to, content} = this.message
    console.log(`Sending sms message to ${to}, from ${from}, content: ${content}`)
  }
}