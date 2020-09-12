const db = require('./database')
const readline = require('readline');
const { parse } = require('path');
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
          
          function pokemonRegister(nome, nivel, tipo) {
              const recebePokemon = {
                  id: db.pokemons.length +1,
                  nome,
                  nivel: parseInt(nivel),
                  tipo: tipo.split()
                }
                  const newPokemons = (db.pokemons)
                  newPokemons.push (recebePokemon)
                  console.table(newPokemons)
              } 

                pokemonRegister(nomePokemon, nivelPokemon, tipoPokemon)
   


          rl.close()
        });
      });
    });
  } else if (instrucao == 'treinar') {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        
        const newLevel = () => {
            if (db.pokemons[idPokemon-1].nivel + parseInt(niveisPokemon) <= 100) {
              return db.pokemons[idPokemon-1].nivel + parseInt(niveisPokemon)
            } else {
              return 100
            }
          }
          db.pokemons[(idPokemon)-1].nivel = newLevel()
          console.table(db.pokemons)
        rl.close()
      });
    });
  } else {
    console.log('Ops, não entendi!')
  }
  console.log(instrucao)
})