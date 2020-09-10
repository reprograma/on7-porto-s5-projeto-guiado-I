const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar' || instrucao == 1) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {                            
         // ================ FUNÇÃO REGISTRA POKEMON ================== //
            var newId = db.pokemons.length+1 // controle do valor do ID

            if(Number(nivelPokemon) > 100){ // controle do nível ate 100
              nivelPokemon = 100
            } else {
             nivelPokemon
            }
            
            db.pokemons.push( // adiciona o novo pokemon com os campos passados como parametro
                {
                    id:newId, // controle do ID vem aqui
                    nome:nomePokemon, // parametros da função entram em nome, nivel e tipo
                    nivel:Number(nivelPokemon),
                    tipo:[tipoPokemon]
                })       
            console.table(db.pokemons) // Tabela com os pokemons existentes e o novo adicionado 
        // ============================================================ //
        rl.close()
        });
      });
    });
  } else if (instrucao == 'treinar' || instrucao == 2) {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        // ================ FUNÇÃO TREINA POKEMON ================== //
          db.pokemons.filter( function(pokemom){
            if ( Number(idPokemon) === pokemom.id){ // Passando os parametros para Number para tratar como número e não string
              if(pokemom.nivel + Number(niveisPokemon) > 100){
                  pokemom.nivel = 100
              } else {
                  pokemom.nivel += Number(niveisPokemon)
              }
            }
          })          
        console.table(db.pokemons)        
        // ================================== //
        rl.close()
      });
    });
  } else {
    console.log("Error: Opção inválida!") // Amarrando as opções 1 e 2 no menu
    rl.close()
  }
  console.log(instrucao)
});