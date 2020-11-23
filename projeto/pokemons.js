
const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.table(db.pokemons)

const createNew = (id, name, level, type) => {
  let newPoke = {
    id: parseInt(id), 
    nome: name,
    nivel: parseInt(level),
    tipo: type,
  }
return newPoke
}

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n (Digite "SAIR" se quiser encerrar a aplicação) \n', function(instruction) {
  if (instruction == "SAIR"){
    console.log("Seus pokemons sentirão saudades :(")
    rl.close()
  } else 
    if (instruction == 'Registrar') {
      rl.question('Nome do pokemon: \n', function(pokeName) {
        rl.question('Nível do pokemon: \n', function(pokeLevel) {
          rl.question('Tipo do pokemon: \n', function(pokeType) {
            const arrayType = [pokeType]
            const pokeID = db.pokemons.length + 1
            db.pokemons
            .push(createNew(pokeID, pokeName, pokeLevel, arrayType))
            console.table(db.pokemons)
            rl.close()
          })
        })
      })
      
    } else if (instruction == 'Treinar') {    
      rl.question('ID do pokemon: \n', function(ID) {
        rl.question('Quantos níveis quer adicionar? \n', function(levelUp) {
          local = parseInt(ID)-1
          name = db.pokemons[local].nome
          tipo = db.pokemons[local].tipo
          oldLevel = parseInt(db.pokemons[local].nivel)           
          db.pokemons[local] = createNew(ID, name, oldLevel + parseInt(levelUp), tipo)
          console.table(db.pokemons)
          rl.close()
        })
      })
  } else if (instruction != 'Treinar' && instruction != 'Registrar'){
    console.log('ERRO: Só são aceitas as instruções "Treinar" ou "Registrar"')
    rl.close()
    }
})

