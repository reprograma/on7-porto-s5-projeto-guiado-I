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

// console.log(listaDeMercado)

for (let i = 0; i<listaDeMercado.length; i++) {
if (listaDeMercado[i].comprado == true) {
  console.log(listaDeMercado[i].nome)
}
}

