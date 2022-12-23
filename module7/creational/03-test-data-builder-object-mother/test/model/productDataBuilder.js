const Product = require("../../src/entities/product");

class ProductDataBuilder {
  constructor(params) {
    // o default são os dados corretos
    // o caso de sucesso!
    this.producData = {
      id: '00001',
      name: 'computer',
      price: 1000,
      category: 'electronic'
    }
  }

  static aProduct() {
    return new ProductDataBuilder()
  }
  
  withInvalidId() {
    this.producData.id = '1'

    return this
  }

  withInvalidName() {
    this.producData.name = 'abc123'

    return this
  }

  withInvalidPrice() {
    this.producData.price = '2000'

    return this
  }

  withInvalidCategory() {
    this.producData.category = 'clothes'

    return this
  }


  build() {
    const product = new Product(this.producData)

    return product
  }
}

module.exports = ProductDataBuilder