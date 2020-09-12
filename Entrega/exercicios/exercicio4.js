// Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

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

function itensComprados(arr){
  const itensComprados = arr.filter(item => item.comprado === true)
  const listaAtualizada = itensComprados.map(item => item.nome)
  return listaAtualizada

}

console.log(itensComprados(listaDeMercado))