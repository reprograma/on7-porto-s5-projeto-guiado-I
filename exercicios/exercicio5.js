const notas = [5, 4, 3, 0, 10]
const somaNotas = notas.reduce((soma, item) => {
    return soma + item
}, 0)
console.log(somaNotas);
