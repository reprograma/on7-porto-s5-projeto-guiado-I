
// exercicio9.js - OK

const bala = ['[>(O)<]', '>(O)<]', '>(O)<', '(O)<', '(O)','O)', 'O'];
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu a bala: ${bala}`);
  }
}

// 9. Desafio surpresa (:

function imprimeNaTela(){
  console.log(`${pessoa.nome} comeu a bala :  ${bala[6]}`) 
}
 
console.log(imprimeNaTela())  // Anna comeu a bala :  O




