const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', (instruction) => {
    if (instruction == 'registrar') {
      rl.question('Qual o nome do pokemon? \n', (namePokemon) => {
          rl.question('Qual o nível do pokemon? \n', (levelPokemon) => {
              rl.question('Qual o tipo do pokemon? \n', (typePokemon) => {
                  
                // ================ FUNÇÃO REGISTRA POKEMON ================== //
                  var newId = db.pokemons.length + 1;

                  if (Number(levelPokemon) > 100 ?  levelPokemon = 100 : levelPokemon)

                  db.pokemons.push(
                    {
                      id: newId,
                      nome: namePokemon,
                      nivel: Number(levelPokemon),
                      tipo: [typePokemon]
                    });
                  console.log(`\nPokemon ${namePokemon} adicionado a sua Pokedex!`)           
                  console.table(db.pokemons);
                  
                // ============================================================ //
                  rl.close();
                });
            });
        });
    } else if (instruction == 'treinar') {
      rl.question('Qual o ID do pokemon? \n', (idPokemon) => {
          rl.question('Quantos níveis quer adicionar? \n', (levelsPokemon) => {
              // ================ FUNÇÃO TREINA POKEMON ================== //
              
              db.pokemons.filter((pokemom) => {
                  if (Number(idPokemon) === pokemom.id) {
                    if (pokemom.nivel + Number(levelsPokemon) > 100 ? pokemom.nivel = 100 : pokemom.nivel += Number(levelsPokemon));
                    console.log(`\n${pokemom.nome} treinado! subiu para o nível ${pokemom.nivel} `)           
                  }
                });
              console.table(db.pokemons);
                            
              // ================================== //
              rl.close();
            });
        });
    } else {
      throw new Error( `Opção inválida! Escolha registrar ou treinar`);
    }
    console.log(instruction);
  });