// 5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

const notasSomadas = notas.reduce(function(acc, item) {
    return acc + item
})

console.log(`Soma das notas: ${notasSomadas}`)