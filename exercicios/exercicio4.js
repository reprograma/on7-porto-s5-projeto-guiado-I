//Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada
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
const listaComprados = listaDeMercado.filter(item => item.comprado == true)

console.log(listaComprados)