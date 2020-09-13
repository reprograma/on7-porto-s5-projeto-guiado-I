// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico,
//  que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? 
// Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar,
// a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntarNumero = function() {
  rl.question('Qual o número mágico? \n', function (resposta) {
        if (numero === numSecreto) {         
      console.log('Parabéns, você acertou!')    
    } else if (numero < numSecreto) {  
            console.log('O número secreto é maior')   
     } else if (numero > numSecreto) {       
       console.log('O número secreto é menor')    }})
    perguntarNumero();
  });
};

perguntarNumero();
