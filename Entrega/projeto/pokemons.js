const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

let menu = () => {
  rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair da Pokedex \n', instruction => {
    if (instruction == 'Registrar' || instruction == 'registrar' || instruction == 1) {
      rl.question('\n Qual o nome do pokemon? \n', namePokemon => {
        rl.question('\n Qual o nível do pokemon? \n', levelPokemon => {
          rl.question('\n Qual o tipo do pokemon? \n', typePokemon => {
  
            const registrarPokemon = (name, level, type) => {
              const pokemon = {
                id: db.pokemons.length + 1,
                name: name,
                level: parseInt(level),
                type: type.split(', ')
              }
              return db.pokemons.push(pokemon)
            }
  
            registrarPokemon(namePokemon, levelPokemon, typePokemon)
            console.log(`\n ${namePokemon} foi registrado com sucesso :D \n`)
            console.table(db.pokemons)
            rl.close()
          })
        })
      }) 
    } else if (instruction == 'Treinar' || instruction == 'treinar' || instruction == 2) {
      let question = () => {
        rl.question('Qual o ID do pokemon? \n', idPokemon => {
          if (!db.pokemons[idPokemon - 1]) {
            console.log('Pokemon não encontrado. Tente novamente.')
            question()
          }
          rl.question('Quantos níveis quer adicionar? \n', levelsPokemon => {
            const treinarPokemon = (id, levels) => {
              const newLevel = db.pokemons[id - 1].level + parseInt(levels)
              if (newLevel > 100) {
                db.pokemons[id - 1].level = 100
              } else {
                db.pokemons[id - 1].level = newLevel
              }     
            }
            treinarPokemon(idPokemon, levelsPokemon)
            console.log(`\n ${db.pokemons[idPokemon - 1].name} subiu de nível :D \n`)
            const highestLevel = db.pokemons.sort( (a, b) => b.level - a.level)
            console.table(highestLevel)
            rl.close()        
        })
      }) 
    }
    question()
    } else if (instruction == 'Sair' || instruction == 'sair' || instruction == 3) {
      console.log('Até mais!')
      rl.close()    
    } else {
      console.log('\n Instrução inválida. Escolha Registrar ou Treinar. \n')
      menu()
    } 
  })
}
menu()