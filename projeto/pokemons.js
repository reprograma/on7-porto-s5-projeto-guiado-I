const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

let menu = () => {
  
  rl.question('O que você gostaria de fazer? \n 1. Registrar pokémon \n 2. Treinar pokémon \n 3. Sair da pokédex \n', option => {
    if (option == 1 || option == 'Registrar' || option == 'registrar') {
        rl.question('\n Qual o nome do pokémon? \n', namePokemon => {
            rl.question('\n Qual o nível do pokémon? \n', levelPokemon => {
                rl.question('\n Qual(is) o(s) tipo(s) do pokémon? \n', typePokemon => {

                    const registerPokemon = (name, level, type) => {
                        const pokemon = {
                            id: db.pokemons.length + 1,
                            name,
                            level: parseInt(level),
                            type: type.split(', ')
                        };
                        return db.pokemons.push(pokemon);
                    };

                    registerPokemon(namePokemon, levelPokemon, typePokemon);
                    console.log(`\n O pokémon ${namePokemon} foi registrado com sucesso.\n`)
                    console.table(db.pokemons)
                    rl.close();
                });
            });
        });
      } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        rl.close()
      });
    });
  }
  console.log(instrucao)
});
