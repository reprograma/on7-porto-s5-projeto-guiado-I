const db = require('./database')
const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar' || instrucao == 'Registrar'  || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.
          

          function insertPokemon(nome, nivel,tipo){
            const pokemon = {
              id: db.pokemons.length + 1,
              nome: nome,
              nivel: parseInt(nivel),
              tipo: tipo.split(','),//função split já separa em array
            
            }
            
            return pokemon
            
            }
            db.pokemons.push(insertPokemon(nomePokemon, nivelPokemon, tipoPokemon))
            console.table(db.pokemons)
          rl.close()
        });
      });
    });
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.

         function treinarPokemon (id, niveis){
           if (db.pokemons.indexOf(id)){
            const pokemon2 = {
              
              nivel: parseInt(niveis) ,
            }  
            return pokemon2
   
            } else {
              console.log("Pokemon não encontrado.")
            }
            
          }
          db.pokemons.includes(treinarPokemon(idPokemon, niveisPokemon)) // encontrar um método do java - includes roda mas não soma
          console.table(db.pokemons)

            
        rl.close()
      });
    });
  }
  console.log(instrucao)
});
