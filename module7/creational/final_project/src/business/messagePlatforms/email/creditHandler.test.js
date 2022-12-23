import EmailCreditHandler from './creditHandler';

describe('EmailCreditHandler', () => {
  const creditRepository = {
    find: jest.fn().mockResolvedValue(3),
    add: jest.fn().mockResolvedValue(4),
    remove: jest.fn().mockResolvedValue(2),
  }

  describe('#checkUserHasCredit', () => {
    let result

    beforeEach(async () => {
      const emailCreditHandler = new EmailCreditHandler({creditRepository, user: {}})
      result = await emailCreditHandler.checkUserHasCredit()
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
      const emailCreditHandler = new EmailCreditHandler({creditRepository, user: {}})
      result = await emailCreditHandler.add(2)
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
      const emailCreditHandler = new EmailCreditHandler({creditRepository, user: {}})
      result = await emailCreditHandler.remove()
    });

    it('should call creditRepository.remove', () => {
      expect(creditRepository.remove).toHaveBeenCalled()
    });

    it('should return credits', () => {
      expect(result).toEqual(2)
    });  
  });
});