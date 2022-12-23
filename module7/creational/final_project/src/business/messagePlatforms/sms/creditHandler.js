import CreditHandler from "../base/creditHandler.js";

export default class SMSCreditHandler extends CreditHandler {
  platform = 'sms'

  async checkUserHasCredit() {
    const { user, platform } = this
    const credits = await this.creditRepository.find({userID: user.id, platform })
    return credits > 0
  }

  async add(quantity) {
    const { user, platform } = this
    return this.creditRepository.add({userID: user.id, platform, quantity})
  }
  async remove(){
    const { user, platform } = this
    return this.creditRepository.remove({userID: user.id, platform})
  }
}