const db = require('./database')
const readline = require('readline');
const { pokemons } = require('./database');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n ', function(instrucao) {
  if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          //console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          function registrarPokemons (nome,nivel,tipo){
            const pokemon = {
              id: db.pokemons.length + 1,
              nome: nome,
              nivel: parseInt(nivel),
              tipo: tipo.split(',')           
            }
             const novoPokemon = db.pokemons.push(pokemon)
        
          }
            registrarPokemons(nomePokemon,nivelPokemon,tipoPokemon)
            console.table(db.pokemons)
          rl.close()
        });
      });
    });
  } else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == 2){
    function perguntas(){
      rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
        if(!db.pokemons[idPokemon - 1]){
          console.log('Pokemon não encontrado. Informe uma ID válido!')
          perguntas()
        } 
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon){ 
        function treinarPokemon(id,nivel){
          const novoNivel = db.pokemons[id - 1].nivel + parseInt(nivel)
          if(novoNivel > 100){
            db.pokemons[id - 1].nivel = 100
          } else{
            db.pokemons[id - 1].nivel = novoNivel
          }
        }
        treinarPokemon(idPokemon,niveisPokemon)
        console.table(db.pokemons)
        rl.close()
  
      })
    })
  } 
  perguntas()
  
}; 
});
