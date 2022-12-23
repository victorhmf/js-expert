const { deepStrictEqual } = require('assert')

let counter1 = 0;
let counter2 = counter1;
counter2++

// tipos primitivos(Boolean, null, undefined, String, and Number) geram cópia do valor em memória
deepStrictEqual(counter1, 0)
deepStrictEqual(counter2, 1)

const item1 = { counter: 0}
const item2 = item1
item2.counter++

// tipos não primitivos (Array, Function and Object), geram cópia do endereço de memória e apontam para o mesmo lugar
deepStrictEqual(item1.counter, 1)
deepStrictEqual(item2.counter, 1)