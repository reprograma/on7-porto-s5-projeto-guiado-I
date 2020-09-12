const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

function pokedex() {
rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao === 'registrar' || instrucao === 'Registrar' || instrucao === 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
        
          function registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon) {
            const addPokemon = {
              id: db.pokemons.length + 1,
              nome: nomePokemon,
              nivel: parseInt(nivelPokemon),
              tipo: tipoPokemon.split(' ')
            }
            db.pokemons.push(addPokemon);
            console.table(db.pokemons);
          }
          registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon);
          rl.close()
        });
      });
    });
  } else if (instrucao === 'treinar' || instrucao === 'Treinar' || instrucao === 2) {
    function filtraPokemon() {
    rl.question('Qual o ID do pokemon? \n', idPokemon => {
      if (!db.pokemons[id.pokemon - 1]) {
        console.log('Pokemon não encontrado. Tente novamente')
        filtraPokemon()
      }
      rl.question('Quantos níveis quer adicionar? \n', niveisPokemon => {
        const treinoPokemon = (id, niveis) => {
          const aumentarNivel = db.pokemons[id - 1] + parseInt(niveis)
      if (aumentarNivel > 100) {
        db.pokemons[id - 1].nivelPokemon
      }
        console.log('ID:', idPokemon, 'Níveis:', nivelsPokemon)
        rl.close()
      });
    });
  }
  console.log(instrucao)
});
}
pokedex()