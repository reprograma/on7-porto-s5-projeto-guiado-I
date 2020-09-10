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
          const addPokemon = (function (){
            var newId = db.pokemons.length+1 // controle do valor do ID
            db.pokemons.push( // adiciona o novo pokemon com os campos passados como parametro
                {
                    id:newId, // controle do ID vem aqui
                    nome:nomePokemon, // parametros da função entram em nome, nivel e tipo
                    nivel:Number(nivelPokemon),
                    tipo:[tipoPokemon]
                })
            newId = db.pokemons.length+1 // em caso de loop, o controle do ID deve ser incrementado para o proximo pokemon adicionado
            return db.pokemons
        })(nomePokemon, nivelPokemon, tipoPokemon) // passa os inputs como parametro
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