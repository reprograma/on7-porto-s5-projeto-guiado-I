const db = require('./database')
const readline = require('readline');
const { pokemons } = require('./database');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
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
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon){
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        function treinarPokemon(id,nivel){
          for(i=0; i<db.pokemons.length;i++){
            if(id === db.pokemons.length[i]){ 
              return `Quantos niveis quer adicionar?` 
            } else {
              return `Pokemon não encontrado. Informe um ID Valido!`
            }
              

            }
            
          }
          console.log(treinarPokemon(idPokemon))
          
         
        rl.close()
  
      });
    });
  }
  console.log(instrucao)
});
