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

// 4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

let listaAtualizada = listaDeMercado
  .filter(element => element.comprado == true)
  .map(element => element.nome)
    console.log(`Os itens já comprados são: ${listaAtualizada.join(', ')}.`)

