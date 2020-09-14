const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntarNumero = function() {
  rl.question('Qual o número mágico? \n', function (resposta) {
    // Aqui você coloca a lógica para verificar se a resposta é correta ou não.

    const numOculto = Math.floor((Math.random() * 10) + 1);
    if (numOculto != resposta ){
      console.log("Está errado. Tente outra vez!")
      if (resposta > numOculto) {
        console.log ("O número é menor!")
      
      } 
      if (numOculto > resposta) {
        console.log ("O número é maior!")
      }
      perguntarNumero()
    } 
    else {
      console.log("Parabéns!! Você acertou!")
    }

     
  });
};

perguntarNumero()





// const acertou = (function () {

//   const numOculto = Math.floor((Math.random() * 10) + 1);

//   let numero

//   do {
//       numero = input.question('Digite um numero ') 
//       if (numero < numOculto ? console.log(`O numero oculto é maior`) : console.log(`O numero oculto é menor`));             
//   } while (numero != numOculto)

//  console.log("Você acertou! O número é: " + numero)

// })()
