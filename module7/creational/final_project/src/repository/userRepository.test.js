import UserRepository from "./userRepository";
import mockedDatabase from '../tests/mocks/database';

describe('UserRepository', () => {
  describe('#find', () => {
    describe('when pass a existing id', () => {
      it('should return user', async () => {
        const userRepository = new UserRepository({database: mockedDatabase()})
        const result = await userRepository.find(1)
  
        expect(result).toEqual(mockedDatabase().users[0])
      });
    });
  
    describe('when pass a non existing id', () => {
      it('should return undefined', async () => {
        const userRepository = new UserRepository({database: mockedDatabase()})
        const result = await userRepository.find(2)
  
        expect(result).toBeUndefined()
      });
    });
  });
});