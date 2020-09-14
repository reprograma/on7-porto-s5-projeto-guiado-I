const valores = [2, 34, 56, 3, 9, 6, 55, 106];
const notas = [10, 8, 9, 7]



function somaImpares(lista){
  let soma = 0
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 > 0){
        soma += lista[i]
    }
  }
  return soma
}
console.log(somaImpares(valores))
console.log(somaImpares(notas))

