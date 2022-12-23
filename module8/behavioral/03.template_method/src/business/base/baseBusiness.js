import { NotImplementedException } from "../../utils/exception.js";

export default class BaseBusiness {
  _validateRequireFields(data){
    throw new NotImplementedException(this._validateRequireFields.name)
  }

  _create(data) {
    throw new NotImplementedException(this._create.name)
  } 

  /*
    Padrão do Martin Flower
    A proposta do padrão é garantir um fluxo de métodos, definindo uma sequencia a
    ser executada

    esse create é a implementação efetiva do template method
  */
  create(data){
    // validar campos
    // salvar no banco
    const isValid = this._validateRequireFields(data)
    if(!isValid) throw new Error('invalid data')

    return this._create(data)
  }
}