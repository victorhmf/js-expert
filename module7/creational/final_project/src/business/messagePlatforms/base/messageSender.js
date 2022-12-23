import NotImplementedException from "../../../utils/notImplementedException.js"

export default class MessageSender {
  constructor({message}) {
    this.message = message
  }

  async send() {
    throw new NotImplementedException(this.send.name)
  }
}