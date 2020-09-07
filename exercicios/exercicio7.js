//7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

// 1ª etapa: criar nova array somente com números ímpares:

const numerosImpar = valores.filter(item => item % 2 !== 0) 
//console.log(somaImpar) //// [3, 9, 55]

// 2ª etapa: somar os valores da nova array:

const somaImpar = numerosImpar.reduce((acumulador, itemAtual) => acumulador + itemAtual)
console.log(`A soma de todos os valores ímpares é: ${somaImpar}`)