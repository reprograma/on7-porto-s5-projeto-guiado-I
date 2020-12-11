/* 4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada */

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

function listaAtualizada(resultado) {
  let retorno = [];
  for (let i = 0; i < resultado.length; i++) {
    if (resultado[i]['comprado']) {
      retorno.push(resultado[i]);
    }
  }
  return retorno;
}
console.log(listaAtualizada(listaDeMercado));