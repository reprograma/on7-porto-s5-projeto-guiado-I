// Some o total dos valores de itens de uma lista de mercado. 
// Bônus: arredonde o valor para até 2 casas decimais!

const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true,
    valor1: 4.64
  },
  {
    nome: 'Chamyto',
    comprado: false,
    valor2: 6.99
  },
  {
    nome: 'Nutella',
    comprado: false,
    valor3: 23.90
  },
  {
    nome: 'Sorvete',
    comprado: true,
    valor4: 12.99
  },
  {
    nome: 'Suco',
    comprado: false,
    valor5: 6.99
  }
]

let total = listaDeMercado.reduce(sumAll, 0);
function sumAll (total, item){
  return total + item.valor
}
console.log(`Valor total: ${total.toFixed(2)}`)
