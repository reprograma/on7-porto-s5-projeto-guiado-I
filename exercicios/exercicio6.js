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


// Função .reduce precisa de dois parâmetros

let total = listaDeMercado.reduce(sumAll, 0);
function sumAll (total, item){
  return total + item.valor
}
console.log(`Valor total: ${total.toFixed(2)}`)

https://medium.com/@luizalbertobm/somar-valores-em-uma-lista-de-objetos-javascript-usando-reduce-faf39aa2618e