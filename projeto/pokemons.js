const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 'REGISTRAR') {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log(`O pokemon ${nomePokemon} foi cadastrado com sucesso!`)
            const registerPokemon = (nomePokemon, nivelPokemon, tipoPokemon) => {
              const newPokemon = {
                id: db.pokemons.length + 1,
                nome: nomePokemon,
                nivel: parseInt(nivelPokemon),
                tipo: tipoPokemon.split(',')
              }
              return newPokemon
            }
            db.pokemons.push(registerPokemon(nomePokemon, nivelPokemon, tipoPokemon))
            console.table(db.pokemons)
          rl.close()
        });
      });
    });
  } else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == 'TREINAR') {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log(`O pokemon ${db.pokemons[idPokemon-1].nome} foi treinado com sucesso!`)
          const newLevel = (niveisPokemon) => {
            if (db.pokemons[idPokemon-1].nivel + parseInt(niveisPokemon) <= 100) {
              return db.pokemons[idPokemon-1].nivel + parseInt(niveisPokemon)
            } else {
              return 100
            }
          }
          db.pokemons[idPokemon-1].nivel = newLevel(niveisPokemon)
          console.table(db.pokemons)
        rl.close()
      });
    });
  } else {
    console.log('Desculpe, não entendi o seu comando. Por favor, reiniciar a sua Pokedex.')
  }
//console.log(instrucao)
});
