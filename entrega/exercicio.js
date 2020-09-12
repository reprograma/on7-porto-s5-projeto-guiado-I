//1)Liste números de 0 a 10 no console

for (let i = 0; i <= 10 ; i++) {
    console.log(i)
}

//2) Liste a tabuada do 6 (do 1 ao 10)

for (let i = 0; i <= 10 ; i++) {
    console.log(i * 6)
}

//3) Liste uma lista de mercado

const listaDeMercado = ['feijão', 'macarrão', 'arroz', 'cebola', 'alho', 'peixe', 'banana', 'carne', 'batata']

for (i = 0; i < listaDeMercado.length; i++) {
    console.log(listaDeMercado[i])
}

//4) Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

//5) Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

const notasSomadas = notas.reduce(function(acc, item) {
    return acc + item
})

console.log(`Soma das notas: ${notasSomadas}`)

//6) Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!

//7)Some somente os valores ímpares de uma lista

//8)Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

console.log(nomes.filter(nomes => nomes.substr(0,1) == 'A'))

//9) Desafio surpresa (:

const confeito = ['>(O)<'];
confeito[0] = '0'
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu o confeito: ${bala}`);
  }
}
pessoa.comer(confeito)