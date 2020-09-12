const { Console } = require("console")

const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true,
    valor: 4.64
  },
  {
    nome: 'Chamyto',
    comprado: false,
    valor: 6.99
  },
  {
    nome: 'Nutella',
    comprado: false,
    valor: 23.90
  },
  {
    nome: 'Sorvete',
    comprado: true,
    valor: 12.99
  },
  {
    nome: 'Suco',
    comprado: false,
    valor: 6.99
  }
]



// 6. Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!
// [wip] 

let soma = 0

function somarValoresItensListaDeMercado (){
  
  
  for (i = 0; i < listaDeMercado.length; i++){
    soma += listaDeMercado[i].valor
    return soma //  Retorna apenas o conteúdo da chave valor do índice 0 do array de objetos da const listaDeMercado.
                
}

}
console.log(somarValoresItensListaDeMercado(listaDeMercado), "teste") // 4.64 
 

console.log(listaDeMercado) 

/*  Exibe após execução do código 

4.64 teste
[
  { nome: 'Maçã', comprado: true, valor: 4.64 },
  { nome: 'Chamyto', comprado: false, valor: 6.99 },
  { nome: 'Nutella', comprado: false, valor: 23.9 },
  { nome: 'Sorvete', comprado: true, valor: 12.99 },
  { nome: 'Suco', comprado: false, valor: 6.99 }
]

*/









