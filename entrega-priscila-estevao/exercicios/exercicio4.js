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
function listaAtualizada (listaDeMercado) {
  const itensComprados = listaDeMercado.filter(item => item.comprado === true)
  const itensNaoComprados = itensComprados.map(item => item.nome)
    return itensNaoComprados
}
console.log(listaAtualizada(listaDeMercado))
// falta transformar a array em lista