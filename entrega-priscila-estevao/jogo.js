// # O que vamos fazer?
// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando?
// Se o jogador acertar, então a máquina diz: Parabéns, você acertou!
// Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntarNumero = function() {
  rl.question('Qual o número mágico? \n', function (resposta) {
    // Aqui você coloca a lógica para verificar se a resposta é correta ou não.

    // Se não estiver correta, pergunta de novo!
    perguntarNumero();
  });
};

perguntarNumero();
