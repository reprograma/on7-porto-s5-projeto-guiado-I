const db = require('./database')
const readline = require('readline');
const { parse } = require('path');
const { pokemons } = require('./database');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

let menu = () => {
  rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instruction) {
    if (instruction == 'registrar' || instruction == 'Registrar' || instruction == 1) {
      rl.question('Qual o nome do pokemon? \n', function(namePokemon) {
        rl.question('Qual o nível do pokemon? \n', function(levelPokemon) {
          rl.question('Qual o tipo do pokemon? \n', function(typePokemon) {
            const registerPokemon = (nome, nivel, tipo) => {
              let newPokemon = {
                id: parseInt(db.pokemons.length + 1),
                nome: nome,
                nivel: parseInt(nivel),
                tipo: tipo.split(',')
              } 
              return newPokemon
            }
            db.pokemons.push(registerPokemon(namePokemon, levelPokemon, typePokemon))
            console.table(db.pokemons)
            rl.close()
          })
        })
      })
    } else if (instruction == 'treinar' || instruction == 'Treinar' || instruction == 2) {
        let question = () => {
          rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
            if(!db.pokemons[idPokemon - 1]) {
              console.log('Sorry! Pokemon não encontrado. Digite uma id válida.')
              question()
            }
            rl.question('Quantos níveis quer adicionar? \n', function(levelsPokemon) {
              const trainPokemon = (id, niveis) => {
                let newLevel = db.pokemons[id - 1].nivel + parseInt(niveis)
                if(newLevel > 100) {
                  db.pokemons[id - 1].nivel = 100
                } else {
                  db.pokemons[id - 1].nivel = newLevel
                }
              }
              trainPokemon(idPokemon, levelsPokemon)
              console.table(db.pokemons)
              rl.close()
            })
          })
        }
        question()
    } else {
      console.log('Comando inválido. Escolha uma das opções: 1. Registrar ou 2. Treinar.')
      menu()
    }
  })
}
menu()