//7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106]

let numerosImpares = valores.filter((item) => {
    return item % 2 != 0})

 //   console.log(numerosImpares)
//[ 3, 9, 55 ]
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    
    console.log(numerosImpares.reduce(reducer))
// 67
