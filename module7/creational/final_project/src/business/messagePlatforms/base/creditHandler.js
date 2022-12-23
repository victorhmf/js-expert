import NotImplementedException from '../../../utils/notImplementedException.js';

export default class CreditHandler {
  constructor({creditRepository ,user}) {
    this.creditRepository = creditRepository
    this.user = user
  }
  
  async checkUserHasCredit() {
    throw new NotImplementedException(this.checkUserHasCredit.name)
  }
  
  async add(amount) {
    throw new NotImplementedException(this.add.name)
  }

  async remove(){
    throw new NotImplementedException(this.remove.name)
  }
}