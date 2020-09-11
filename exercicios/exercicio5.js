// Some uma lista de notas de escola

// const notas = [5, 4, 3, 0, 10]


const soma = function(nu1, nu2, nu3, nu4, nu5) {
    return nu1 + nu2 + nu3 + nu4 + nu5
}

console.log(soma(5,4,3,0,10))

//ou

let total = notas.reduce(function(total, notas){
    return total + notas;
 }, 0);
  console.log(total) 