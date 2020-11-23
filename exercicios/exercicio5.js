const notas = [5, 4, 3, 0, 10]

// 5. Some uma lista de notas de escola

function somaArray(arr){
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
console.log(soma)
}
somaArray(notas)

///// COM REDUCE

let somaArray = notas.reduce((soma, valorAtual) => {
    return soma + valorAtual;
}, 0)
 
console.log(somaArray)