9999999999999999 // 16
// 10000000000000000
true + 2
// 3
'21' + true
// '21true'
'21' - true
// 20
'21' - - 1
// 22
0.1 + 0.2 === 0.3
// false
3 > 2 > 1
// false
3 > 2 >= 1
// true
"B" + "a" + + "a" + "a"
// BaNaNa
'1' == 1
//true
'1' === 1
//false

// --------------

console.assert(String(123) === '123', 'explicit conversion to string')
console.assert(123 + '' === '123', 'implicit conversion to string')

console.assert(('hello' || 123) === 'hello', '|| returns the first element')
console.assert(('hello' && 123) === 123 , '&& returns the last element')

// --------------

const item = {
  name: 'Victor Fernandes',
  age: 26,
  // string: se não for primitivo, chama o valueof
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
  // number: se não for primitivo, chama o toString
  valueOf() {
    return { hey: 'dude'}
    // return 007
  },
  [Symbol.toPrimitive](coercionType) {
    // console.log('trying to convert to', coercionType);
    const types = {
      string: JSON.stringify(this),
      number: '0007'
    }

    return types[coercionType] || types.string
  }
  // ele tem prioridade na parada!
}

// console.log('toString', String(item));
// vai retornar NaN pois o toString retornou a string
// console.log('valueOf', Number(item));

// depois de adicionar o toPrimitive
// console.log('toString', String(item));
// console.log('Number', Number(item));
// // chama a conversão default
// console.log('Date', new Date(item));

console.assert(item + 0 === '{"name":"Victor Fernandes","age":26}0')
// console.log('!!item is true?', !!item);
console.assert(!!item)

console.assert('Ae'.concat(item) === 'Ae{"name":"Victor Fernandes","age":26}');

// console.log('implicit + explicit coercion (using ==)', item == String(item));
console.assert(item == String(item))

const item2 = { ...item, name: 'Zézin', age: 20 }
// console.log('new Object', item2);
console.assert(item2.name === 'Zézin' && item2.age === 20)