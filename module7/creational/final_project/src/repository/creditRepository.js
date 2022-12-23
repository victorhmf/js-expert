import BaseRepository from "./baseRepository.js";

export default class CreditRepository extends BaseRepository {
  async find({userID, platform}) {
    const user = this.database.users.find(user => user.id === userID)

    return user.credits[platform]
  }

  async add({userID, platform, quantity = 1}){
    const user = this.database.users.find(user => user.id === userID)
    return user.credits[platform] += quantity
  }

  async remove({userID, platform}){
    const user = this.database.users.find(user => user.id === userID)
    return user.credits[platform] -= 1
  }
}