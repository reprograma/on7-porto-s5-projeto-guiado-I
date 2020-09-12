
/*# O que vamos fazer?

Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

Vamos lá?*/
const input = require('readline-sync');

const numSecreto = Math.floor(Math.random() * 50);
console.log ('Estou pensando num número secreto entre 0 e 50. Tente advinhar!') 
let resposta = 0
    
do {
	let resposta = input.questionInt('Qual o número secreto?');
	if (resposta < numSecreto) {
		console.log('Errado! Seu palpite está muito baixo.Tente outra vez: ');
	} else if (resposta > numSecreto) {
		console.log('Errado! Seu palpite está muito alto.Tente outra vez: ');
	} else if (resposta === numSecreto) {
		console.log('Parabéns você acertou o número!');
		break;
	}
} while (resposta != numSecreto);
