// 5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10] 

let soma = notas.reduce(function(soma, notas){
    return soma + notas}, 0)
console.log(soma)
