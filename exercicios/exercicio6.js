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

const somaPrecos = (arr) => {
  let soma = 0
  for (let i = 0; i < arr.length ; i++){
    soma += arr[i]['valor']
  }
console.log(`O valor total dos ${arr.length} itens é R$${soma.toFixed(2)}`)
}

somaPrecos(listaDeMercado)

/// COM REDUCE

let precos = listaDeMercado.map(element => element.valor)
let somaReduce = precos.reduce((soma, valorAtual) => {
  return soma + valorAtual;
}, 0)

console.log(`R$ ${somaReduce.toFixed(2)}`)

