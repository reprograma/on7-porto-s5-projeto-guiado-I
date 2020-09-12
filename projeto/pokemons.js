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
          
          
          const addPokemon = (nomePokemon, nivelPokemon, tipoPokemon) => 
          
          function parseNumber(nivelPokemon) {
            const nivelParse = parseInt(nivelPokemon)
            nivelParse.push(nivelPokemon)
          return nivelParse
          }

          function tipoArray(tipoPokemon) {
            const arrAux = []
            arrAux.push(tipoPokemon)
            return arrAux
          }

          const newPokemon = {
              id: db.pokemons.length +1,
              nome: nomePokemon,
              nivel: nivelPokemon,
              tipo: tipoArray(tipoPokemon)
            }
          
            return newPokemon
            db.push(newPokemon)


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
        
        const searchPockemon = () => {
          db.filter(cadaPokemon => cadaPokemon.id == idPokemon)
        }

        
        rl.close()
      });
    });
  }
  console.log(instrucao)
});
