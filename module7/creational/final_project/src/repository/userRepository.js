import BaseRepository from "./baseRepository.js";

export default class UserRepository extends BaseRepository {
  async find(id){
    return this.database.users.find(user => user.id === id)
  }
}