import SMSCreditHandler from './creditHandler';

describe('SMSCreditHandler', () => {
  const creditRepository = {
    find: jest.fn().mockResolvedValue(3),
    add: jest.fn().mockResolvedValue(4),
    remove: jest.fn().mockResolvedValue(2),
  }

  describe('#checkUserHasCredit', () => {
    let result

    beforeEach(async () => {
      const smsCreditHandler = new SMSCreditHandler({creditRepository, user: {}})
      result = await smsCreditHandler.checkUserHasCredit()
    });

    it('should call creditRepository.find', () => {
      expect(creditRepository.find).toHaveBeenCalled()
    });

    it('should return true', () => {
      expect(result).toBeTruthy()
    });
  });

  describe('#add', () => {
    let result
    
    beforeEach(async () => {
      const smsCreditHandler = new SMSCreditHandler({creditRepository, user: {}})
      result = await smsCreditHandler.add(2)
    });

    it('should call creditRepository.add', () => {
      expect(creditRepository.add).toHaveBeenCalled()
    });

    it('should return credits', () => {
      expect(result).toEqual(4)
    });  
  });

  describe('#remove', () => {
    let result
    
    beforeEach(async () => {
      const smsCreditHandler = new SMSCreditHandler({creditRepository, user: {}})
      result = await smsCreditHandler.remove()
    });

    it('should call creditRepository.remove', () => {
      expect(creditRepository.remove).toHaveBeenCalled()
    });

    it('should return credits', () => {
      expect(result).toEqual(2)
    });  
  });
});