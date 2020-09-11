const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

let menu = () => {
  rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
    if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 1) {
      rl.question('Qual o nome do pokemon? \n', (nomePokemon) => {
        rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
          rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
  
            function registrarPokemon(nome, nivel, tipo) {
              const pokemon = {
                id: db.pokemons.length + 1,
                nome: nome,
                nivel: parseInt(nivel),
                tipo: tipo.split(', ')
              }
              return db.pokemons.push(pokemon)
            }
  
            registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon)
            console.table(db.pokemons)
            rl.close()
          })
        })
      }) 
    } else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == 2) {
      let question = () => {
        rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
          const idDigitado = db.pokemons.find(pokemon => pokemon.id == idPokemon);
          if (!idDigitado) {
            console.log('Pokemon não encontrado. Tente novamente.')
            question();
          }
          rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
            function treinarPokemon(id, niveis) {
              const novoNivel = db.pokemons[id - 1].nivel + parseInt(niveis)
              if (novoNivel > 100) {
                db.pokemons[id - 1].nivel = 100
              } else {
                db.pokemons[id - 1].nivel = novoNivel
              }          
              console.table(db.pokemons)
            }
            treinarPokemon(idPokemon, niveisPokemon)
            rl.close()        
        })
      }) 
    }
    question()      
    } else {
      console.log('\n Instrução inválida. Escolha Registrar ou Treinar. \n')
      menu()
    } 
  })

}
menu()