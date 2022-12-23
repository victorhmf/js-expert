import SMSMessageSender from './messageSender';
import mockedMessage from '../../../tests/mocks/message';

describe('SMSMessageSender', () => {
  describe('#send', () => {
    it('should call console.log with right params', async () => {
      global.console = {log: jest.fn()}

      const smsMessageSender = new SMSMessageSender({message: mockedMessage})
      await smsMessageSender.send()

      const {from, to, content} = mockedMessage
      expect(console.log).toHaveBeenCalledWith(
          `Sending sms message to ${to}, from ${from}, content: ${content}`
        );
    });
  });
});