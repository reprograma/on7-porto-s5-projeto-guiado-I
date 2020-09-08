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

  var novaLista = listaDeMercado.filter((item) => { 
    return item.comprado === false
  })

  console.log(novaLista)

  /*

    { nome: 'Chamyto', comprado: false },
  { nome: 'Nutella', comprado: false },
  { nome: 'Suco', comprado: false }   

  */ 
 