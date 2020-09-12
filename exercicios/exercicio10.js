
/*# O que vamos fazer?

Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

Vamos lá?*/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const numSecreto = Math.floor(Math.random() * 100);;
console.log ('Estou pensando num número secreto entre 0 e 100. Tente advinhar!') 
const perguntarNumero = function () {
	rl.question('Qual o número secreto? \n', function (resposta) { 
        // Aqui você coloca a lógica para verificar se a resposta é correta ou não.
        if (resposta === numSecreto) {
    console.log ('Parabéns você acertou o número!')
        } else if (resposta < numSecreto) {
    console.log ('Errado! Seu palpite está muito baixo.Tente outra vez: ');
        } else {
    console.log('O número que você digitou é maior que o número secreto. Tente outra vez:');
        }
    })
}; 
perguntarNumero();