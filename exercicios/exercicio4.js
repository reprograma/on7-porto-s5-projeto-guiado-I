// 4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

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

var novaLista = listaDeMercado.filter(item => item.comprado === false)
console.log('Itens não comprados usando filter',novaLista)

var novaLista = listaDeMercado.filter(item => item.comprado === true)
console.log('Itens comprados usando filter',novaLista)

var listaAgrupada = listaDeMercado.reduce(function(itensAcumulados, itemDaLista){
  const itemComprado = itemDaLista.comprado === true ? 'comprado' : 'naoComprado';

  itensAcumulados[itemComprado].push(itemDaLista)

  return itensAcumulados
}, {comprado: [], naoComprado: []})

console.log('Lista com Reduce', listaAgrupada)