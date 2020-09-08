// 5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]
let soma = 0;

for (nota of notas){
    soma += nota
}
console.log('soma com for tradicional',soma)

const somaNotas = notas.reduce(function(soma, nota){
    soma += nota
    return soma
},0)
console.log('soma com reduce',somaNotas)

const somaNotasArrow = notas.reduce((soma, nota) => soma += nota,0)
console.log('soma com reduce e arrow',somaNotasArrow)