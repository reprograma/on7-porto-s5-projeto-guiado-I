const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n', function(instrucao) {
  if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 'REGISTRAR' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      function questionLevel() {
        rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
          if (nivelPokemon > 100 || '' == nivelPokemon) {
            console.log(`Digite um nível de 0 a 100.`)
            questionLevel()
          } else {
            rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
              console.log(`O Pokemon ${nomePokemon} foi registrado com sucesso!`)
                const registerPokemon = (name, level, type) => {
                  const newPokemon = {
                    id: db.pokemons.length + 1,
                    name: name,
                    level: parseInt(level),
                    type: type.split(',')
                  }
                  return newPokemon
                }
                db.pokemons.push(registerPokemon(nomePokemon, nivelPokemon, tipoPokemon))
                console.table(db.pokemons.sort((a, b) => b.level - a.level))
              rl.close()
            });
          }
      });
    }
    questionLevel()
    });
  } else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == 'TREINAR' || instrucao == 2) {
    function questionId() {
      rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
        if (!db.pokemons[idPokemon-1]) {
          console.log(`Desculpe, não encontramos o ID informado. Por favor, tente novamente.`)
          questionId()
        }
          rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
            console.log(`O Pokemon ${db.pokemons[idPokemon-1].name} foi treinado com sucesso!`)
              const newLevel = (idPokemon, niveisPokemon) => {
                if (db.pokemons[idPokemon-1].level + parseInt(niveisPokemon) <= 100) {
                  db.pokemons[idPokemon-1].level = parseInt(db.pokemons[idPokemon-1].level + parseInt(niveisPokemon))
                } else {
                  db.pokemons[idPokemon-1].level = 100
                }
              }
              newLevel(idPokemon, niveisPokemon)
              console.table(db.pokemons.sort((a, b) => b.level - a.level))
            rl.close()
          });
        });
      }
    questionId()
    } else if (instrucao == 'Sair' || instrucao == 'sair' || instrucao == 'SAIR' || instrucao == 3) {
      console.log('Até mais! o/')
      rl.close()
    } else {
      console.log('Desculpe, não entendi o seu comando.')
      rl.close()
    }
})
