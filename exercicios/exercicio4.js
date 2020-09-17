///4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada
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

///// 1ª etapa: criando nova array com produtos que ainda não foram comprados

const produtosEmFalta = listaDeMercado.filter(item => item.comprado !== true)

//Visualizando array <produtosEmFalta> 
// console.log(produtosEmFalta)
//console.log("\n")

///// 2ª etapa: iterando a nova array <produtosEmFalta> e exibindo uma listagem atualizada do que ainda falta ser comprado:

console.log(`Falta comprar: `)
 
for (let i = 0; i < produtosEmFalta.length; i++) {
  console.log(produtosEmFalta[i].nome)   
} 