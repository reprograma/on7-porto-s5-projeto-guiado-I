const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroMaximo = 100;
const numeroMinimo = 0;

const gerarValorAleatorio = () => {
  return Math.round(Math.random() * numeroMaximo);
};

const numeroSorteado = gerarValorAleatorio();

const perguntarNumero = function () {
  rl.question("Qual o número mágico? \n", function (resposta) {
    if (numeroMaximo >= resposta && numeroMinimo <= resposta) {
      if (numeroSorteado == resposta) {
        console.log(`Parabéns, você acertou!`);

        rl.close();
      } else {
        if (numeroSorteado < resposta) {
          console.log(`Número é maior que o número secreto!`);

          perguntarNumero();
        } else {
          console.log(`Número é menor que o número secreto!`);

          perguntarNumero();
        }
      }
    } else {
      console.log(`Tente outra vez!`);
      perguntarNumero();
    }
  });
};

perguntarNumero();
