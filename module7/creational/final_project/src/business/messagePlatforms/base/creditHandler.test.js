import NotImplementedException from '../../../utils/notImplementedException';
import CreditHandler from './creditHandler';

describe('CreditHandler', () => {
  describe('#checkUserHasCredit', () => {
    it('should thrown NotImplementedException', async () => {
      const creditHandler = new CreditHandler({creditRepository: {}, user: {}})
      await expect(creditHandler.checkUserHasCredit())
        .rejects.toThrow(new NotImplementedException('checkUserHasCredit'))
    });
  });

  describe('#add', () => {
    it('should thrown NotImplementedException', async () => {
      const creditHandler = new CreditHandler({creditRepository: {}, user: {}})
      await expect(creditHandler.add())
        .rejects.toThrow(new NotImplementedException('add'))
    });
  });

  describe('#remove', () => {
    it('should thrown NotImplementedException', async () => {
      const creditHandler = new CreditHandler({creditRepository: {}, user: {}})
      await expect(creditHandler.remove())
        .rejects.toThrow(new NotImplementedException('remove'))
    });
  });
});