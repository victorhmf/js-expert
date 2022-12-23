import EmailCreditHandler from '../business/messagePlatforms/email/creditHandler';
import mockedDatabase from '../tests/mocks/database';
import CreditHandlerFactory from './creditHandlerFactory';

describe('CreditHandlerFactory', () => {
  it('should instantiate MessageSenderFacade dependecies correctly', async () => {
    const creditHandlerFactory = await CreditHandlerFactory.createInstance({
      user: mockedDatabase()[0],
      platform: 'email',
    })

    expect(creditHandlerFactory).toBeInstanceOf(EmailCreditHandler)
  });
});