/* 7. Some somente os valores ímpares de uma lista */

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const somaValoresImpares = (arr) => {
    const impares = arr.filter(num => num % 2 !== 0);
    const total = impares.reduce((total, num) => total + num, 0);
    return total;
}

console.log(somaValoresImpares(valores));