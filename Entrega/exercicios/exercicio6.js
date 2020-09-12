// Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!

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

const valorTotal = (arr) => {
  const total = arr.reduce((total, item) => total + item.valor, 0)
  return total.toFixed(2) 

}

console.log(valorTotal(listaDeMercado))