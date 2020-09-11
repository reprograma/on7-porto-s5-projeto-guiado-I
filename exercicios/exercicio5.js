//5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

const reduce = notas.reduce((acc, item) => {
    return acc + item / 5
}, 0)

console.log(reduce)


//Somei e tirei a média. Considerei mais coerente. 