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
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        function treinarPokemon(idPokemon, niveisPokemon){
          for(i=0; i<db.pokemons.length;i++){
            if(idPokemon !== db.pokemons.id){
              return` Pokemon nao registrado!`
            }else if(idPokemon === db.pokemons.id){
              return `Adicionar nivel`
            }
           
          }
           
          }
           console.log(treinarPokemon(idPokemon, niveisPokemon))
           console.table(db.pokemons)


        rl.close()
      });
    });
  }
  console.log(instrucao)
});