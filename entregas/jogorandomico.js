
// # O que vamos fazer?

// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.
// Vamos lá?

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numRandomico = Math.floor(Math.random() * 10 + 1)// - url que pesquisei: http://devfuria.com.br/javascript/numeros-aleatorios/
//console.log(numRandomico) para saber qual numero secreto
rl.question('Qual o número secreto?', function (newNumero){
    const numero = parseInt(newNumero) 
    if (numero > numRandomico) {
        console.log('O número que você digitou é maior que o número secreto')
    } else if (numero < numRandomico) {
        console.log('O número que você digitou é menor que o número secreto');
    } else if (numero === numRandomico) {
        console.log('Parabéns você acertou o número secreto!')

    }
    rl.close()
})



