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

novaListaDeMercado = listaDeMercado.map((listaDeMercado) => listaDeMercado.valor);
listaReduzida = novaListaDeMercado.reduce((soma, item) => soma + item).toFixed(2);
console.log (listaReduzida);

/*
Saída: 
55.51
*/
