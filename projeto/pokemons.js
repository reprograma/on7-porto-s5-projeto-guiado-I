const db = require('./database')
const readline = require('readline');
const { pokemons } = require('./database');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'Registrar') {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          
          registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon) 
         
          

          rl.close()
        });
      });
    });
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      // db.pokemons.find(pokemon => pokemon.id === idPokemon) 
      function acharPokemon(pokemon) {
        return parseInt(idPokemon) === pokemon.id
      }
      const achouPokemon = pokemons.find(acharPokemon)
      console.log(achouPokemon)
      if(achouPokemon === undefined) {
        console.log("Pokemon não encontrado")
      }
      

      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        treinarPokemon(achouPokemon, niveisPokemon)
        console.table(db.pokemons)
        
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        rl.close()
      });
    });
  }
  console.log(instrucao)
});

function registrarPokemon(nome, nivel, tipo) {
  
  const pokemon = {
    id: db.pokemons.length+1, 
    nome: nome,
    nivel: parseInt(nivel),
    tipo: tipo.split(","),

  }
  db.pokemons.push(pokemon)
  console.table(db.pokemons)

  console.log(nome, nivel, tipo)
}

function treinarPokemon(pokemon, nivel) {
  pokemon.nivel = pokemon.nivel + parseInt(nivel)
  if(pokemon.nivel > 100) {
    pokemon.nivel = 100
  }
  

}