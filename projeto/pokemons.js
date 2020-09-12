const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 1
  ) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          // Chame AQUI a função que irá receber os valores e registrar o pokemon.
          function registroPoke(nomePokemon, nivelPokemon, tipoPokemon){
            const pokemon = {
              id: db.pokemons.length + 1,
              nome: nomePokemon,
              nivel: parseInt(nivelPokemon),
              tipo: tipoPokemon.split(',') 
            } 
            
            db.pokemons.push(pokemon);
            console.table(db.pokemons)
          } 
          registroPoke(nomePokemon, nivelPokemon, tipoPokemon);

          rl.close()
        });
      });
    });
  } else {
    // trainingQuestion ();
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      const pokemonFiltered = db.pokemons.filter(pokemon => pokemon.id == idPokemon)
      if (pokemonFiltered.length === 0) {
        console.error(`Não foi encontrado pokemon para o id: ${idPokemon}`); 
        // trainingQuestion();
      } else 
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        const newNivel = pokemonFiltered[0].nivel + parseInt(niveisPokemon);
        newNivel > 100 ? pokemonFiltered[0].nivel = 100 : pokemonFiltered[0].nivel = newNivel;

        db.pokemons.map(pokemon => pokemon.id === idPokemon ? pokemonFiltered[0] : pokemon)

        console.table(db.pokemons);
        console.table(pokemonFiltered)
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        
        rl.close()
      });
      });
    }; 
});
