import mockedDatabase from '../tests/mocks/database';
import CreditRepository from "./creditRepository";

describe('CreditRepository', () => {
  describe('#find', () => {
    it('should return credits from user in specific platform', async () => {
      const creditRepository = new CreditRepository({database: mockedDatabase() })
      const result = await creditRepository.find({userID: 1, platform: 'sms'})

      expect(result).toEqual(1)
    });    
  });

  describe('#add', () => {
    it('should add credits from user in specific platform', async () => {
      const creditRepository = new CreditRepository({database: mockedDatabase() })
      const result = await creditRepository.add({userID: 1, platform: 'sms'})

      expect(result).toEqual(2)
    });  
  });

  describe('#remove', () => {
    it('should remove credits from user in specific platform', async () => {
      const creditRepository = new CreditRepository({database: mockedDatabase() })
      const result = await creditRepository.remove({userID: 1, platform: 'sms'})

      expect(result).toEqual(0)
    });  
  });
});