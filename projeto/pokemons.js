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
    function filtraPokemon(){
    rl.question('Qual o ID do pokemon? \n', idPokemon => {
      if (!db.pokemons[id.pokemon - 1]) {
        console.log('Pokemon Inexistente. Digite novamente')
        filtraPokemon()
      }
      rl.question('Quantos níveis quer adicionar? \n', nivelPokemon => {
        function treinoPokemon (id, nivel) {
          const aumentarNivel = db.pokemons[id - 1] + parseInt(nivel)
      if (aumentarNivel > 100) {
        db.pokemons[id - 1].nivel = 100
      } else {
        db.pokemons[id - 1].nivel = aumentarNivel
      }
    }
   treinoPokemon(idPokemon, nivelPokemon) {
    const maiorNivel = db.pokemons.sort((a, b) => b.nivel - a.nivel)
    console.table(maiorNivel)
    rl.close()
      })
    })
  }
  filtraPokemon()

  // Não consegui visualizar o erro nesta segunda etapa :/ 