import BaseBusiness from '../src/business/base/baseBusiness.js';
import { NotImplementedException } from '../src/utils/exception';

describe('#BaseBusiness', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  });
  
  test('should thrown an error when child class does not implements _validateRequireFields funtion', () => {
    class ConcreteClass extends BaseBusiness {}
    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreteClass._validateRequireFields.name
    )
    expect(() => concreteClass.create({})).toThrow(validationError)
  });

  test('should thrown an error _validateRequireFields returns false', () => {
    class ConcreteClass extends BaseBusiness {
      _validateRequireFields = jest.fn().mockReturnValue(false)
    }
    const concreteClass = new ConcreteClass()
    const validationError = new Error('invalid data')

    expect(() => concreteClass.create({})).toThrow(validationError)

  });

  test('should thrown an error when child class does not implements _create funtion', () => {
    class ConcreteClass extends BaseBusiness {
      _validateRequireFields = jest.fn().mockReturnValue(true)
    }
    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreteClass._create.name
    )
    expect(() => concreteClass.create({})).toThrow(validationError)
  });
  
  test('should call _create and _validateRequiredFields on create', () => {
    class ConcreteClass extends BaseBusiness {
      _validateRequireFields = jest.fn().mockReturnValue(true)
      _create = jest.fn().mockReturnValue(true)
    }
    const concreteClass = new ConcreteClass()

    const createFromBaseClass = jest.spyOn(
      BaseBusiness.prototype,
      BaseBusiness.prototype.create.name
    )

    const result = concreteClass.create()

    expect(result).toBeTruthy()
    expect(createFromBaseClass).toHaveBeenCalled()
    expect(concreteClass._validateRequireFields).toHaveBeenCalled()
    expect(concreteClass._create).toHaveBeenCalled()
  });
});