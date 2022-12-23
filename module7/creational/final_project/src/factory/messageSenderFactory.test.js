import SMSCreditHandler from '../business/messagePlatforms/sms/creditHandler';
import SMSMessageSender from '../business/messagePlatforms/sms/messageSender';
import mockedDatabase from '../tests/mocks/database';
import mockedMessage from '../tests/mocks/message';
import MessageSenderFactory from './messageSenderFactory';

describe('MessageSenderFactory', () => {
  it('should instantiate MessageSenderFacade dependecies correctly', async () => {
    const messageSenderFactory = await MessageSenderFactory.createInstance({
      user: mockedDatabase()[0],
      platform: 'sms',
      message: mockedMessage
    })

    expect(messageSenderFactory.creditHandler).toBeInstanceOf(SMSCreditHandler)
    expect(messageSenderFactory.messageSender).toBeInstanceOf(SMSMessageSender)
  });
});