const db = require('./database')
const readline = require('readline');
const { pokemons } = require('./database');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar' || instrucao == 'Registrar' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          //console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.
          function registrarPokemon(nomePoke, nivelPoke, tipoPoke) {
            const pokemon = {
              id: db.pokemons.length + 1,
              nome: nomePoke,
              nivel: parseInt(nivelPoke),
              tipo: tipoPoke.split(', ')
            }
            if (nivelPoke > 100){
              console.log('O pokemon só pode ter até 100 níveis')
            }
            else {
            return db.pokemon.push(pokemon)
            }
          }
          registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon)
          console.table(db.pokemons)     
          
          rl.close()
        });
      });
    });
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        //console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        function treinarPokemon(id, nivel){
          const pokemonATreinar = db.pokemons ((item) => {return item.id})
          
        }

        rl.close()
      });
    });
  }
  console.log(instrucao)
});
