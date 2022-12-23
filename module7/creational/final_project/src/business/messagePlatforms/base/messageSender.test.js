import NotImplementedException from '../../../utils/notImplementedException';
import MessageSender from './messageSender';

describe('MessageSender', () => {
  describe('#send', () => {
    it('should thrown NotImplementedException', async () => {
      const messageSender = new MessageSender({message: {}})
      await expect(messageSender.send())
        .rejects.toThrow(new NotImplementedException('send'))
    });
  });
});