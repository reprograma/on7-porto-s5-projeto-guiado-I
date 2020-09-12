const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pokedex (){
  console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar' || instrucao == 'Registrar' || instrucao == '1') {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon)  {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.
          function pokemonRegister (pokeName, pokeLevel, pokeType) {
            let registeredPokemon = {
              id: parseInt(db.pokemons.length + 1),
              nome: pokeName,
              nivel: parseInt(pokeLevel),
              tipo: pokeType.split(","), // a função split converte a string em um array, seu parâmetro é o separador 
            }
            return registeredPokemon
          }
          db.pokemons.push(pokemonRegister(nomePokemon, nivelPokemon, tipoPokemon))
          console.table(db.pokemons)
          rl.close()
        });
      });
    });
  } else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == '2') {
    let question = () => {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
     if(!db.pokemons[idPokemon - 1]){
       console.log('Pokemon não encontrado. Tente novamente')
       question()
     }
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        function pokemonCouch (id, levels) {
          const newLevel = db.pokemons[id - 1].nivel + parseInt(levels)
          if (newLevel > 100) {
            db.pokemons[id - 1].nivel = 100
          } else {
            db.pokemons[id - 1].nivel = newLevel
          } return console.table(db.pokemons)
        }
        pokemonCouch(idPokemon, niveisPokemon)
        console.log('Parabéns, treinadora o nível do Pokemon', db.pokemons[idPokemon - 1].nome,'foi atualizado para',db.pokemons[idPokemon -1].nivel,"!")

        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        rl.close()
        })
      });
    };
    question()
  } else { 
    console.log("Esse comando não existe! Acione um comando existente.")
    pokedex()
  }
})
 // console.log(instrucao)

}

pokedex() 