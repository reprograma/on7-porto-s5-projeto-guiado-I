
const db = require('./database')
const readline = require('readline');
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
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          //  Chame AQUI a função que irá receber os valores e registrar o pokemon.
          function registerPoke (pokeName, pokeLevel, pokeType){
          let registeredPoke = {
              id: parseInt(db.pokemons.length + 1), 
              nome: pokeName,
              nivel: parseInt(pokeLevel),
              tipo: [pokeType],
          }
      return registeredPoke
}
db.pokemons.push(registerPoke(nomePokemon, nivelPokemon, tipoPokemon))
console.table(db.pokemons)

          rl.close()
        });
      });
    });
  } else if (instrucao == 'Treinar') {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
                 
          if (idPokemon > db.pokemons.length){
          console.log('Pokemon não encontrado')
         } else {
          console.log('Pokemon Encontrado')
         }
       
        rl.close()
      });
    });
  } else if (instrucao != 'Treinar' && instrucao != 'Registrar'){
    console.log('ERRO: Só são aceitas as instruções "Treinar" ou "Registrar"')
    rl.close()
    }
  // console.log(instrucao)
});
