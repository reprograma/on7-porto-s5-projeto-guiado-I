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
