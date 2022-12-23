import OrderBusiness from './business/orderBusiness.js';
import Order from './entities/order.js';

const order = new Order({
  customerId: 1,
  amount: 200.000,
  products: [{description : 'shampoo'}]
})

const orderBusiness = new OrderBusiness()
console.info('orderCreated', orderBusiness.create(order))

