// 6. Some o total dos valores de itens de uma lista de mercado. 
// Bônus: arredonde o valor para até 2 casas decimais!
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

const valores = listaDeMercado.map(listaDeMercado => listaDeMercado.valor) 
// cria uma array nova chamada valores onde cada valor da array listaDeMercado
// se torna um índice

const reducer = (accumulator, currentValue) => accumulator + currentValue
// constante reducer que torna-se uma função que recebe dois parâmetros 
// e soma ambos, sendo um o acumulador e outro o valor atual

const valorFinal = valores.reduce(reducer).toFixed(2)

console.log(valorFinal)
// método reduce é aplicado na constante valores e toma como parâmetro a função reducer
//imprime no console a soma de todos os valores
