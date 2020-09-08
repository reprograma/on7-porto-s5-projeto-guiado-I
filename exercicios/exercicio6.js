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
 console.log(valores)

 const reducer =(accumulator, currentValue) => accumulator + currentValue
 const valorFinal = valores.reduce(reducer).toFixed(2)

 console.log(valorFinal)