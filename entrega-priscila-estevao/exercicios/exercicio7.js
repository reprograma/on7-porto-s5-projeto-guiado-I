// 7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

function SomaImpares(arr) {
  const numImpar = arr.filter(num => num % 2 != 0)
  const somaTotal = numImpar.reduce((total, num) => total + num, 0)
    return somaTotal
}
console.log(SomaImpares(valores))