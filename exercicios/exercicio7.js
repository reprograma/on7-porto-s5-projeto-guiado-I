//7. Some somente os valores ímpares de uma lista


const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const somaImpar = valores.filter((i) => {
    return i % 2 != 0})
    const reducer = (acc, cValue) => acc + cValue    
    console.log(somaImpar.reduce(reducer))
