const valores = [2, 34, 56, 3, 9, 6, 55, 106];
  


console.log("_________________________________")

// Somando os valores ímpares com o for antes da resolução do exercicio7.js

const valor = [3, 9, 55]
let soma = 0

   for (i = 0 ; i < valor.length; i++){
      soma += valor[i]
      
       }
 
       console.log(soma)

console.log("_________________________________")


// Resolução do Exercicio : 7. Some somente os valores ímpares de uma lista

 const newValue = valores.filter((i) => i % 2 != 0 )
 
 console.log(newValue) // Exibe valores filtrados conforme condição (numeros ímpares)

const somaValoresImpares = newValue.reduce ((acumula, num) => acumula + num, 0)

console.log (somaValoresImpares)  // Exibe soma dos valores filtrados conforme condição após uso do reduce

   
/* Exibe após execução do código 

[ 3, 9, 55 ]
67

*/