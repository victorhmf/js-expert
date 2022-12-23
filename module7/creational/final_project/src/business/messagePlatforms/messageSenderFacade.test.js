import MessageSenderFacade from "./messageSenderFacade";

describe('MessageSenderFacade', () => {
  describe('#send', () => {
    const messageSender = {
      send: jest.fn().mockResolvedValue()
    }

    const creditHandler = {
      checkUserHasCredit: jest.fn().mockResolvedValue(true),
      remove: jest.fn().mockResolvedValue()
    }

    describe('when user does not have credits', () => {
      jest.spyOn(creditHandler, 'checkUserHasCredit').mockResolvedValueOnce(false)
      const messageSenderFacade = new MessageSenderFacade({messageSender, creditHandler})
      
      it('should throw Credit missing error', async () => {
        const promise = messageSenderFacade.send()
        await expect(promise).rejects.toThrow(new Error('Credit missing'))
        expect(creditHandler.checkUserHasCredit).toHaveBeenCalled()
      });
    });

    describe('when user has credits', () => {
      const messageSenderFacade = new MessageSenderFacade({messageSender, creditHandler})

      beforeEach(async () => {
        await messageSenderFacade.send()
      });

      it('should call checkUserHasCredit', () => {
        expect(creditHandler.checkUserHasCredit).toHaveBeenCalled()
      });
      
      it('should call messageSender.send()', () => {
        expect(messageSender.send).toHaveBeenCalled()
      });

      it('should call creditHandler.remove()', () => {
        expect(creditHandler.remove).toHaveBeenCalled()
      });
    });
  });
});