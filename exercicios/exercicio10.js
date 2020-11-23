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
