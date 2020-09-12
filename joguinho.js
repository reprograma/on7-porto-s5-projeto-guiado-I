const input = require("readline-sync");

// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

// Vamos lá?

const numGerado = Math.floor(Math.random() * 10)
let numEscolhido = 0

do {
  let numEscolhido = input.questionInt(`Que número (de 0 a 10) estou pensando?`)
  if (numEscolhido < numGerado) {
    console.log(`Não foi desta vez! Tente um número maior, entre ${numEscolhido} e 10!`);
  } else if (numEscolhido > numGerado) {
  console.log(`Não foi desta vez! Tente um número menor, entre ${numEscolhido} e 0!`);
  } else if (numEscolhido === numGerado) {
    console.log(`Parabéns, você acertou!`)
    break;
  }
} while (numEscolhido !== numGerado);