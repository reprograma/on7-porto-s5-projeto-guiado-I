// Q1. Liste números de 0 a 10 no console

function numbers() {

    for (let i = 0; i <= 10; i++){
      console.log(i)
    }

} 
numbers()

//Q2. Liste a tabuada do 6 (do 1 ao 10)

function multForSix() {

    let n = 6 
    for (let i = 1; i <= 10; i++){
      console.log(`${n} x ${i} = ${n*i}`)
    
    }

} 
multForSix()

//Q3. Liste uma lista de mercado

const listaDeMercado = ['maçã', 'banana', 'chamyto', 'nutella', 'coca-cola', 'bisnaguinha', 'rap10']


function list1() {
    for (let i = 0; i < listaDeMercado.length; i++){
        console.log(listaDeMercado[i])
 }
}
list1()


//Q4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

const listaDeMercado = [
    {
      nome: 'Maçã',
      comprado: true
    },
    {
      nome: 'Chamyto',
      comprado: false
    },
    {
      nome: 'Nutella',
      comprado: false
    },
    {
      nome: 'Sorvete',
      comprado: true
    },
    {
      nome: 'Suco',
      comprado: false
    }
  ]
  
  
  let newList = []
  
  for (let i = 0; i < listaDeMercado.length; i++) {
    if (listaDeMercado[i].comprado == false) {
      newList.push(listaDeMercado[i])
    }
  } 
  
  console.log(newList)
  

 //Q5.Some uma lista de notas de escola  - usabdo o reduce

const notas = [5, 4, 3, 0, 10]

let total = notas.reduce(function(total, notas){
   return total + notas;
}, 0);

console.log(total)

//Q6. Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!

const listaDeMercado = [
    {
      nome: 'Maçã',
      comprado: true,
      valor: 4.64
    },
    {
      nome: 'Chamyto',
      comprado: false,
      valor: 6.99
    },
    {
      nome: 'Nutella',
      comprado: false,
      valor: 23.90
    },
    {
      nome: 'Sorvete',
      comprado: true,
      valor: 12.99
    },
    {
      nome: 'Suco',
      comprado: false,
      valor: 6.99
    }
  ]
  
  let total = listaDeMercado.reduce(sumAll, 0);
  function sumAll (total, item){
    return total + item.valor
  }
  console.log(`Valor total: ${total.toFixed(2)}`)


//Q7. Some somente os valores ímpares de uma lista


const valores = [2, 34, 56, 3, 9, 6, 55, 106];

function somaImpares(){
  let soma = 0
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 > 0){
        soma += lista[i]
    }
  }
  return soma
}
console.log(somaImpares(valores))

//Q8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

let nomesIniciadosA = [];
let novoIndice = 0;

function nameA(nome, indice){
    if (nomes[indice].indexOf("A") == 0){
        nomesIniciadosA[novoIndice] = nomes[indice];
        novoIndice++;
    }
}

nomes.forEach(nameA);
console.log(nomesIniciadosA)


//Q9. Uma pessoa é representada pelo objeto pessoa. Essa pessoa tem a habilidade de comer. 
//A string >(O)< representa uma confeito. Faça com que essa pessoa consiga comer esse confeito, mas pra isso, 
//você vai precisar tirá-lo da embalagem.
// O resultado esperado deve ser: A NomeDaPessoa comeu o confeito: O
  

const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer: function(confeito) {
    confeito[0] = "O"
    console.log(`${this.nome} comeu o confeito: ${confeito}`);
  }

}

pessoa.comer(confeito)



// Jogo do Número Oculto

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