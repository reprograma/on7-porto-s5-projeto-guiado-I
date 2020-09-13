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
const listaValor = []
  for(let i=0; i<listaDeMercado.length; i++){
  if (listaDeMercado[i].comprado === true) {
    listaValor.push(listaDeMercado[i].valor)
  }
}
//console.log(listaValor)
let totalPagar = listaValor.reduce(soma, 0);
function soma (totalPagar, item){
  return totalPagar + item
}
console.log(`Valor comprado para pagar: ${totalPagar.toFixed(2)}`)

let total = listaDeMercado.reduce(add, 0);
function add (total, item){
  return total + item.valor
}
console.log(`Soma de todos os valores da lista: ${total.toFixed(2)}`)





