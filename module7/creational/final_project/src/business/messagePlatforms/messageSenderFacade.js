export default class MessageSenderFacade {
  constructor({ messageSender, creditHandler }) {
    this.messageSender = messageSender
    this.creditHandler = creditHandler
  }

  async send() {
    const userHasCredit = await this.creditHandler.checkUserHasCredit()
    if(!userHasCredit) throw new Error('Credit missing')

    await this.messageSender.send()
    await this.creditHandler.remove()
  }
}