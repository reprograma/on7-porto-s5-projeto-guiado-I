const readline = require("readline");
const rl = readline.createInterface({
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
});


const perguntarNumero = function () {
  const numeroMaximo = 100;
  rl.question('Qual o número mágico? \n', function (resposta) {
      const numeroMinimo = 0;
      // Aqui você coloca a lógica para verificar se a resposta é correta ou não.	


      // Se não estiver correta, pergunta de novo!	const gerarValorAleatorio = () => {
      perguntarNumero();
      return Math.round(Math.random() * numeroMaximo);
    }

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
    });
};
};