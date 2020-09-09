const valores = [2, 34, 56, 3, 9, 6, 55, 106];

let numerosImpares = valores.filter((numero) =>{
    return numero % 2 != 0
})
console.log (numerosImpares)

const reducer = (acc, curretValue) => acc + curretValue

console.log (numerosImpares.reduce(reducer))

