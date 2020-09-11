// 7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

console.log((valores.filter(item => item % 2 !== 0)).reduce((acc, item) => acc + item))