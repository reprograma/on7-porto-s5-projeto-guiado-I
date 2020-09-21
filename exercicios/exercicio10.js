const input = require('readline-sync')
let valorEntrada = input.question("Qual seu chute? ")
let respostaJs = Math.floor(Math.random() * 100)

for (let tentativa = 1; tentativa < 4; tentativa++){

if (valorEntrada > respostaJs){
    console.log(`Quase! Você digitou um valor maior que o número sorteado!`)
    tentativa = 5
} else {
    if (valorEntrada < respostaJs){
        console.log(`Quase! Você digitou um valor menor que o número sorteado!`)
    }
}
}
 console.log(valorEntrada)
//  console.log(respostaJs)

















// let arrayDeNumeros = [1, 2, 3, 4]

// const valorFinal = arrayDeNumeros.reduce(function (quemVaiAcumulandoOResultadoFinal, valorNumericoDoElementoDoArray){
// return quemVaiAcumulandoOResultadoFinal + valorNumericoDoElementoDoArray
// }, 0) // esse zero é o valor inicial

// console.log(valorFinal)

// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
// let pessoas = [{nome: "Mariana", comida: "salame", cor: "lilás",},{nome: "Nicki", comida: "arroz", cor: "rosa",}]
  



