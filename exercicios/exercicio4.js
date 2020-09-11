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

// exercicio4.js  [wip] // retorna lista original, mas não entra na condição

let novoArray = 0

function filtrarItensComprados (){
  
  for ( i = 0; i < listaDeMercado.length; i++ ){

    
    if (listaDeMercado.valor === false){
      novoArray += listaDeMercado.valor
        console.log(listaDeMercado.valor)
          console.log(novoArray)
          return novoArray
    }  
  
  }
} 
console.log (listaDeMercado)// Exibe todos os itens da lista original     
   
console.log(filtrarItensComprados(listaDeMercado), "TESTE1")
 
novoArray = listaDeMercado.filter (function (){


 return (listaDeMercado === false)
})

console.log (this.comprado, "TESTE2")


/* Exibe após execução do código 

{ nome: 'Maçã', comprado: true }   
{ nome: 'Chamyto', comprado: false } 
{ nome: 'Nutella', comprado: false } 
{ nome: 'Sorvete', comprado: true } 
{ nome: 'Suco', comprado: false } 
undefined TESTE1
undefined TESTE2

*/


