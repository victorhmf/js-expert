import WhatsappMessageSender from './messageSender';
import mockedMessage from '../../../tests/mocks/message';

describe('WhatsappMessageSender', () => {
  describe('#send', () => {
    it('should call console.log with right params', async () => {
      global.console = {log: jest.fn()}

      const whatsappMessageSender = new WhatsappMessageSender({message: mockedMessage})
      await whatsappMessageSender.send()

      const {from, to, content} = mockedMessage
      expect(console.log).toHaveBeenCalledWith(
          `Sending whatsapp message to ${to}, from ${from}, content: ${content}`
        );
    });
  });
});