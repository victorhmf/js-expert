const assert = require('assert')
const myMap = new Map()

// podem ter qualquer coisa como chave

myMap
  .set(1, 'one')
  .set('Erick', { text: 'two' })
  .set(true, () => 'hello')


// usando um construtor

const myMapWithConstructor = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
])

// console.log('myMap', myMap);
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Erick'), { text: 'two'})
assert.deepStrictEqual(myMap.get(true)(), 'hello')

// Em Objects a chave só pode ser string ou symbol (number é coergido a string)
const onlyReferenceWorks = { id: 1}
myMap.set(onlyReferenceWorks, { name: 'ErickWendel' })

assert.deepStrictEqual(myMap.get({ id: 1}), undefined)
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'ErickWendel' })

// utilitarios
// - No Object seria Object.keys({a: 1}).length
assert.deepStrictEqual(myMap.size, 4)

// para verificar se um item existe no objeto
// item.key = se não existe = undefined
// if() = coerçao implicita para boolean e retorna false
// O jeito certo em Object é ({ name: 'ErickWendel' }).hasOwnProperty('name')
assert.ok(myMap.has(onlyReferenceWorks))

// para remover um item do objeto
// delte item.id
// imperformático para o Javascript

assert.ok(myMap.delete(onlyReferenceWorks))

// Não da para iterar em Objects diretamente
// tem que transformar com o Object entries(item)

assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1,"one"],["Erick",{"text":"two"}],[true,null]]))

// for (const [key, value] of myMap) {
//   console.log({key, value});
// }

// Object é inseguro, pois dependendo do nome da chave, pode substituir algum comportamento padrao
// ({ }).toString() === '[object Object]'
// ({toString: () => 'Hey'}).toString() === 'Hey'

// qualquer chave pode colidir, com as propriedades herdadas do objeto, como
// constructor, toString, valueOf e etc.

const actor = {
  name: 'Xuxa da Silva',
  toString: 'Queen: Xuxa da Silva'
}

// não tem restrição de chave
myMap.set(actor)
assert.ok(myMap.has(actor))
assert.throws(() => myMap.get(actor).toString, TypeError)

// Não da pra limpar um Obj sem reassina-lo
myMap.clear()
assert.deepStrictEqual([...myMap.keys()], [])

// --- WeakMap

// Pode ser coletador após perder as referencias
// usado em casos bem especificos

// tem a maioria dos beneficios do Map
// MAS: nao é iteravel
// Só chaves de referencia e que você já conheça
// mais leve e preve leak de memoria, pq depois que as instancias saem da memoria, tudo é limpo

const weakMap = new WeakMap()

const hero = { name: 'Flash'}

weakMap.set(hero)
weakMap.get(hero)
weakMap.delete(hero)
weakMap.has(hero)

