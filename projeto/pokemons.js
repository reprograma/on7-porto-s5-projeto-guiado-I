const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar') {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.

          function registerPokemon (idPoke, name, level, type) {
            let registered = {
              id: idPoke,
              nome: name,
              nivel: level,
              tipo: type,

            }
            for (let i = 0; i < db.pokemons; i++) {
              db.pokemons.push(registered)
            }  
            return registered         
          }
         
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.
          console.table(registerPokemon())
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
        rl.close()
      });
    });
  }
  console.log(instrucao)
});
