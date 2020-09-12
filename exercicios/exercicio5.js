const notas = [5, 4, 3, 0, 10]
let soma = 0
const somaNotas = notas.reduce((soma, item) => {
    return soma + item
}, 0)
console.log(somaNotas);
