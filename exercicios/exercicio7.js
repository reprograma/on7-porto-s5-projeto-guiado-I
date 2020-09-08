// 7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const somaNotas = valores.reduce(function(soma, valores){
  if (valores % 2 != 0){
    soma += valores
  }
  return soma
},0)
console.log('soma com reduce:',somaNotas)