const notas = [5, 4, 3, 0, 10]

// 5. Some uma lista de notas de escola
// exercicio5.js  OK
let soma = 0

function somarNotas (){
     
    for (i = 0; i < notas.length; i++) {
        soma += notas[i]        
}

    return `O resultado da soma das notas foi :  ${soma}`
    
}
console.log(somarNotas())

