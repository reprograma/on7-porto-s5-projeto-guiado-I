// const notas = [5, 4, 3, 0, 10];
// let soma = 0;

// for (let i = 0; i < notas.length; i++) {
//   soma += notas[i];

//   console.log(soma);
// }

const notas = [5, 4, 3, 0, 10];

const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);

console.log(somaNotas);
