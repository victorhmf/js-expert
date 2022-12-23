import EmailMessageSender from './messageSender';
import mockedMessage from '../../../tests/mocks/message';

describe('EmailMessageSender', () => {
  describe('#send', () => {
    it('should call console.log with right params', async () => {
      global.console = {log: jest.fn()}

      const emailMessageSender = new EmailMessageSender({message: mockedMessage})
      await emailMessageSender.send()

      const {from, to, content} = mockedMessage
      expect(console.log).toHaveBeenCalledWith(
          `Sending email message to ${to}, from ${from}, content: ${content}`
        );
    });
  });
});