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

function produtosComprados(){
   const produtosComprados = listaDeMercado.filter(item => item.comprado === false);
   const listaAtualizada = produtosComprados.map(item => item.nome);
   return listaAtualizada
}
 
console.log (produtosComprados(listaDeMercado));

/* Saída:
[ 'Chamyto', 'Nutella', 'Suco' ]
*/