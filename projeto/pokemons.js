
const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)


rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n (Digite "SAIR" se quiser encerrar a aplicação) \n', function(instruction) {
  if (instruction == "SAIR"){
    console.log("Seus pokemons sentirão saudades :(")
    rl.close()
  } else 
  if (instruction == 'Registrar') {
    rl.question('Qual o nome do pokemon? \n', function(namePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(levelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(typePokemon) {
          console.log('Nome:', namePokemon, 'Nível:', levelPokemon, 'Tipo:', typePokemon)
          
          function registerPoke (pokeId, pokeName, pokeLevel, pokeType){
          let registeredPoke = {
              id: parseInt(pokeId), 
              nome: pokeName,
              nivel: parseInt(pokeLevel),
              tipo: [pokeType],
          }
      return registeredPoke
}
db.pokemons.push(registerPoke(parseInt(db.pokemons.length + 1), namePokemon, levelPokemon, typePokemon))

console.table(db.pokemons)

          rl.close()
        });
      });
    });
  } else if (instruction == 'Treinar') {
    
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(levelUpPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', levelUpPokemon)
        // Você pode remover esse console.log acima se quiser.
                 
        function treinaPoke (pokeId, pokeName, pokeLevel, pokeType){
          let pokemonTreinado = {
              id: parseInt(pokeId),
              nome: pokeName,
              nivel: pokeLevel,
              tipo: pokeType
              }
      return pokemonTreinado
}

db.pokemons[parseInt(idPokemon)-1] = treinaPoke (idPokemon, db.pokemons[idPokemon-1].nome, parseInt(db.pokemons[idPokemon-1].nivel) + parseInt(levelUpPokemon), db.pokemons[idPokemon-1].tipo)
console.table(db.pokemons)
       
        rl.close()

      });
    });
  } else if (instruction != 'Treinar' && instruction != 'Registrar'){
    console.log('ERRO: Só são aceitas as instruções "Treinar" ou "Registrar"')
    rl.close()
    }
  // console.log(instruction)
});

