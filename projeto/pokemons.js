const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          const registerPokemon = (pokeName, pokeLevel, pokeType) => {
            let registeredPokemon = {
              id: parseInt(db.pokemons.length + 1),
              nome: pokeName,
              nivel: parseInt(pokeLevel),
              tipo: pokeType.split(',')
            } 
            return registeredPokemon
          }
          db.pokemons.push(registerPokemon(nomePokemon, nivelPokemon, tipoPokemon))
          console.table(db.pokemons)
          rl.close()
        });
      });
    });
  } else if (instrucao == 'treinar' || instrucao == 2) {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        rl.close()
      });
    });
  } else {
    console.log('Opção inválida')
    return instrucao
  }
  console.log(instrucao)
});
