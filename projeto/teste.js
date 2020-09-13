const input = require("readline-sync")
const emoji = require('node-emoji')

const { log } = console;
const message = ':mega: Bem vindo a Calculadora de Média :rocket:. Digite 6 valores para saber a média';
const emojiMessage = emoji.emojify(message);

log(emojiMessage);


const valor1 = input.question('Digite o primeiro valor  ') 
const valor2 = input.question('Digite o segundo valor  ')
const valor3 = input.question('Digite o terceiro valor  ')
const valor4 = input.question('Digite o quarto valor  ')
const valor5 = input.question('Digite o quinto valor  ')
const valor6 = input.question('Digite o sexto valor  ')

const total = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)+ parseFloat(valor4) + parseFloat(valor5) +parseFloat(valor6))/6
console.log('Sua média Foi: ')
console.log(total.toFixed(2))

if (total < 5 ) {
    const sorry = emoji.get('cry');
    const message = `Você foi Reprovado, sorry ${sorry}!`;
    log(message)
} else if (total >= 5 && total <7) {
    const attention = emoji.get('warning');
    const message = `Você está em Recuperação, attention ${attention}!`;
    log(message)
} else {
    const approved = emoji.get('congratulations');
    const message = `Você foi Aprovado, congratulations ${approved}!`;
    log(message)
}