import MessageSenderFacade from "../business/messagePlatforms/messageSenderFacade.js";
import CreditRepository from "../repository/creditRepository.js";
import database from "../utils/database.js";


export default class MessageSenderFactory {
  static async createInstance({user, platform, message}) {
    const { default: CreditHandler } = await import(
      `../business/messagePlatforms/${platform}/creditHandler.js`
    )
    const { default: MessageSender } = await import(
      `../business/messagePlatforms/${platform}/messageSender.js`
    )

    const creditRepository = new CreditRepository({ database })
    const creditHandler = new CreditHandler({ user, creditRepository})
    const messageSender = new MessageSender({ message })

    const messageSenderFacade = new MessageSenderFacade({ creditHandler, messageSender })

    return messageSenderFacade
  }
}