//7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const arrayImpar = []
  for(let i=0; i<valores.length; i++){
  if (valores[i] % 2 != 0) {
    arrayImpar.push(valores[i])
  }
}
//console.log(arrayImpar)

let soma = arrayImpar.reduce(function(soma, numero){
    return soma + numero}, 0)
console.log(soma)

