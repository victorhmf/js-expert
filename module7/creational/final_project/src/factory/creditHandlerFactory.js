import CreditRepository from "../repository/creditRepository.js";
import database from "../utils/database.js";


export default class CreditHandlerFactory {
  static async createInstance({user, platform}) {
    const { default: CreditHandler } = await import(
      `../business/messagePlatforms/${platform}/creditHandler.js`
    )

    const creditRepository = new CreditRepository({ database })
    const creditHandler = new CreditHandler({ user, creditRepository})
      
    return creditHandler
  }
}