const arr = ['anna', 'joão']

const meuReduce = arr.reduce((acumulador, item) => {
  return acumulador + item
}, '')

console.log(meuReduce)
