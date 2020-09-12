const valores = [2, 34, 56, 3, 9, 6, 55, 106];
// [wip]
// 7. Some somente os valores ímpares de uma lista
let soma = 0
let soma2 = 0
let soma3 = 0
function somaValoresImpares(){

     for (i = 0 ; i < valores.length; i++){
        soma += valores[i]
       
     } if (valores % 2 == 0){
         soma2 += valores[i]
         
        return `A soma dos valores pares é: ${soma2}  TESTE-2` 

        } else if (valores % 2 == 1) {
            soma3 += valores[i]
            return `A soma dos valores ímpares é:   ${soma3} TESTE-3 ` 
       }

}

 
   console.log(somaValoresImpares(valores))
  
   console.log(soma,  "TESTE-1 - RETORNA SOMA DE TODOS OS ELEMEMTOS ARRAY")
   console.log(soma2, "TESTE-2")
   console.log(soma3, "TESTE-3")

console.log("_________________________________")
console.log("---------------------------------")

const valor = [2, 3, 5, 10]
let soma4 = 0
   for (i = 0 ; i < valor.length; i++){
      soma4 += valor[i]
    
 }
 console.log(soma4, "TESTE-4 - não tem relação com a questão")

 
 /* Exibe após execução do código 
 
   undefined
   271 TESTE-1 - RETORNA SOMA DE TODOS OS ELEMEMTOS ARRAY
   0 TESTE-2
   0 TESTE-3
   _________________________________
   ---------------------------------
   20 TESTE-4 - não tem relação coma questão


 */