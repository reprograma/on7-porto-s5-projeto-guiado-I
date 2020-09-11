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

// exercicio4.js  [wip] // retorna todos os objetos, mas não entra na condição

let novoArray = 0

function filtrarItensComprados (){
  
  for ( i = 0; i < listaDeMercado.length; i++ ){

    console.log (listaDeMercado[i])// Exibe todos os itens da lista original (true or false)    
   
    if (listaDeMercado[i] === false){
      novoArray += listaDeMercado[i]
        console.log(listaDeMercado[i])
          
          return novoArray
    }  

  }
} 

console.log(filtrarItensComprados(), "TESTE1")
 
novoArray = listaDeMercado.filter (function (){


 return (listaDeMercado === false)
})

console.log (this.comprado, "TESTE2")


/* print da tela caso if esteja comentado

{ nome: 'Maçã', comprado: true } t e s t e    
{ nome: 'Chamyto', comprado: false } t e s t e
{ nome: 'Nutella', comprado: false } t e s t e
{ nome: 'Sorvete', comprado: true } t e s t e 
{ nome: 'Suco', comprado: false } t e s t e   
undefined TESTE1
undefined TESTE2

*/


/* print da tela caso comente descomente  bloco if
{ nome: 'Maçã', comprado: true } t e s t e
[object Object] TESTE
undefined TESTE2
*/