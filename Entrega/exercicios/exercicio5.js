//Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

const somarNotas = (arr) => {
    const total = arr.reduce((total, numero) => total + numero, 0)
    return total
}

console.log(somarNotas(notas))