//Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

function somarNumerosImpares(valores) {
const numImpares = valores.filter((i) => i % 2 === 1);
const resultado = numImpares.reduce((soma, i) => soma + i, 0);
return resultado
}
console.log(somarNumerosImpares(valores));

/* Saída: 
67
*/

