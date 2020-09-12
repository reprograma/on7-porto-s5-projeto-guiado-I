const db = require('../projeto/database')
const input = require('readline-sync')
const { pokemons } = require('../projeto/database')

console.log('== versão com readline-sync ==')
console.table(db.pokemons)

while (true){
const instrucao = input.question('O que voce gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n')
if (instrucao == 'registrar' || instrucao == 'Registrar' || instrucao == '1') {
    const nomePokemon = input.question('Qual o nome do pokemon? \n')
    const nivelPokemon = input.question('Qual o nível do pokemon? \n')
    const tipoPokemon = input.question('Qual o tipo do pokemon? Se mais de um tipo, separe por vírgulas \n')
    console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
    // Você pode remover esse console.log acima se quiser.

    function regPokemon (name, level, type){
      let newObj = {
        id: parseInt(db.pokemons.length +1),
        nome: name,
        nivel: parseInt(level),
        tipo: type.split(",")
        }
     
        db.pokemons.push(newObj)
      }
  
  // Chame AQUI a função que irá receber os valores e registrar o pokemon. 
    regPokemon(nomePokemon, nivelPokemon, tipoPokemon)
    console.table(db.pokemons)
    
}
else if (instrucao == 'treinar' || instrucao == 'Treinar' || instrucao == '2') {
    const idPokemon = input.question('Qual o ID do pokemon? \n')
    const niveisPokemon = input.question('Quantos niveis quer adicionar? \n')
    console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
    // Você pode remover esse console.log acima se quiser.

    
    function trainPokemon(element, level){
           if (idPokemon == element.id){
           addLevel = element.nivel + parseInt(niveisPokemon)
           element.nivel = addLevel
        } if (addLevel > 100){
           return element.nivel;
        } else {
            addLevel = element.nivel + parseInt(niveisPokemon)
        } 
        
        

      
    }   

    // Chame AQUI a função que irá receber os valores e treinar o pokemon.
    pokemons.forEach(trainPokemon)
    trainPokemon(idPokemon, niveisPokemon)
    console.table(db.pokemons)
}
}




// if ((db.pokemons[a].nivel + Number(level)) > 100) {
//     db.pokemons[a].nivel = 100;
//   } else {
//     db.pokemons[a].nivel = db.pokemons[a].nivel + Number(level);
//   }
//   console.table(db.pokemons);
//   boolean = false;
// }
// }
// if (boolean) {
// console.log('Pokemon não encontrado!');
// }
// }