const db = require('./database')
const readline = require('readline');
const { table } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

function rodar () {
rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instruction) {
    if (instruction == 'Registrar' || instruction == 'registrar' || instruction == 1) {
      rl.question('Qual o nome do pokemon? \n', function(namePokemon) {
        rl.question('Qual o nível do pokemon? \n', function(levelPokemon) {
          rl.question('Qual o tipo do pokemon? \n', function(typePokemon) {  
            function registerPokemon (namePokemon, levelPokemon, typePokemon) {
              
              const pokemon = {
              id: db.pokemons.length+1,
              nome: namePokemon,
              nivel: parseInt(levelPokemon),
              tipo: typePokemon.split(',')

              }

              db.pokemons.push(pokemon)
              console.table(db.pokemons)
              
            }
        
            registerPokemon (namePokemon, levelPokemon, typePokemon)
            console.log(`\n ${namePokemon} foi registrado! \n`)

            rl.close()
          });
        });
      });
    } else {
          rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
            if (instruction == 'Treinar' || instruction == 'treinar' || instruction == 2) {}
              else if (!db.pokemons[idPokemon - 1]) {
                console.log('Pokemon não encontrado. Digite outro id.')
                question()
              }
              rl.question('Quantos níveis quer adicionar? \n', function(levelsPokemon) {
                const treinarPokemon = (id, levels) => {
                  const newLevel = db.pokemons[id -1].level + parseInt(levels)
                  if (newLevel > 100) {
                    db.pokemons[id - 1].level = 100
                  } else {
                    db.pokemons[id - 1].level = newLevel
                  }
                }
                treinarPokemon(idPokemon, levelsPokemon)
                console.log(`\n ${db.pokemons[idPokemon - 1].name} Subiu de nível!\n`)
                console.log('ID:', idPokemon, 'Níveis:', levelsPokemon)

                rl.close()
            });
          });
        console.log(instruction)
    }
  })
}
rodar ()
