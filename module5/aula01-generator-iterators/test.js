const process = require('process')

const promise = (param) => new Promise(resolve => {
  setTimeout(() => {
    resolve(param)
  }, 50);
})

const messages = Array.from({length: 100}, (_, index) => `${index}-mensagem`)

async function* asyncGenerator() {
  // yield 'broker.publish'
  // yield new Promise(resolve => resolve('esperei'))
  // yield Promise.resolve('esperei')
  // yield new Promise(resolve => resolve('esperei'))
  // yield promise('teste')
  // yield 'broker.publish'
  for (const message of messages) {
    yield 'broker.publish';
    yield promise(message); 
  }
}


(async () => {
  for await(const item of asyncGenerator()) {
    console.log(item);
  }

  // for (const message of messages) {
  //   console.log('broker.publish');
  //   console.log(await promise(message));  
  // }
})()

// {
//   rss: 22470656,
//   heapTotal: 6053888,
//   heapUsed: 3566680,
//   external: 1083768,
//   arrayBuffers: 9898
// }