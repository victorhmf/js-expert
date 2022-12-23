import OrderBusiness from '../src/business/orderBusiness.js';
import Order from '../src/entities/order.js';
import { NotImplementedException } from '../src/utils/exception';

describe.only('Test suite for template method design pattern', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  });

  describe('#OrderBusiness', () => {
    test('executing Order Business without template method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{description: 'Ferrari'}]
      })

      const orderBusiness = new OrderBusiness()
      // todos os devs devem obrigatoriamente lembrar de seguir a risca esse fluxo de execuçào
      // se algum esquecer de chamar a função de validaçào, pode quebrar todo o sistema
      const isValid = orderBusiness._validateRequireFields(order)
      expect(isValid).toBeTruthy()

      const result = orderBusiness._create(order)
      expect(result).toBeTruthy()
      
    });
    test('executing Order Business with template method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{description: 'Ferrari'}]
      })

      // com template method, a sequencia de passos é sempre executada
      // evita a replicação de lógica
      const orderBusiness = new OrderBusiness()
      const calledValidationFn = jest.spyOn(
        orderBusiness,
        orderBusiness._validateRequireFields.name
      ).mockReturnValue(true)

      const calledCreateFn = jest.spyOn(
        orderBusiness,
        orderBusiness._create.name
      ).mockReturnValue(true)

      const result = orderBusiness.create(order)
      
      expect(result).toBeTruthy()
      expect(calledValidationFn).toHaveBeenCalledWith(order)
      expect(calledCreateFn).toHaveBeenCalledWith(order)
    });
  });
});