import CreditHandlerFactory from "./factory/creditHandlerFactory.js";
import MessageSenderFactory from "./factory/messageSenderFactory.js";
import UserRepository from "./repository/userRepository.js";
import database from "./utils/database.js";

export default class Api {
  //routes
  async sendMessage({ platform, message }) {
    const user = await this.loggedUser()

    const messageSenderFactory = await MessageSenderFactory.createInstance({ user, platform, message })
    await messageSenderFactory.send() 
  }

  async addCredits({ platform, quantity }) {
    const user = await this.loggedUser()

    const creditHandlerFactory = await CreditHandlerFactory.createInstance({ user, platform })
    await creditHandlerFactory.add(quantity)
  }

  async loggedUser(){
    const userRepository = new UserRepository({ database })
    return userRepository.find(1)
  }
}