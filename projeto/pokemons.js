const db = require('./database')
const readline = require('readline');
const { pokemons } = require('./database');
const { generateKeyPair } = require('crypto');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.

          function registrar(nomePokemon, nivelPokemon, tipoPokemon){
            const pokemon = {
              id: parseInt(db.pokemons.length + 1),
              nome: nomePokemon,
              nivel: parseInt(nivelPokemon),
              tipo: [tipoPokemon]
            }
              return pokemon
              }
              
          db.pokemons.push(registrar(nomePokemon, nivelPokemon, tipoPokemon))
          console.table(db.pokemons)
              
                  
          rl.close() 
        });
      });
    });
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {

        function treinarPokemon(idPokemon, niveisPokemon){
                
          const nova = db.pokemons[idPokemon-1].nivel  + parseInt(niveisPokemon)
         
          if(nova <= 100){
            db.pokemons[idPokemon-1].nivel = nova
            return nova
          }else{
            return db.pokemons[idPokemon-1].nivel = 100
          }
        }
                   

        treinarPokemon(idPokemon, niveisPokemon)

        console.table(db.pokemons)
        

        rl.close()
      });
    });
  }
  console.log(instrucao)
});