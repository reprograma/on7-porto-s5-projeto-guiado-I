const db = require("./database");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.table(db.pokemons);

const MAX_LEVEL = 100;

const verifyHasPokemonInDb = (selectedPokemonId) => {
  return db.pokemons.findIndex((pokemon) => pokemon.id == selectedPokemonId);
};

const verifyIfPokemonHasMaxLevel = (currentLevel) => {
  return Number(currentLevel) >= MAX_LEVEL;
};

const sumLevelPokemon = (currentLevel, pokemonNewLevel) => {
  const totalLevel = Number(currentLevel) + Number(pokemonNewLevel);

  if (totalLevel >= MAX_LEVEL) {
    return MAX_LEVEL;
  } else {
    return totalLevel;
  }
};

const upgradedPokemonLevel = (pokemonTrainId, pokemonNewLevel) => {
  return db.pokemons.map((pokemon) =>
    pokemon.id == pokemonTrainId
      ? {
          ...pokemon,
          nivel: verifyIfPokemonHasMaxLevel(pokemon.nivel)
            ? pokemon.nivel
            : sumLevelPokemon(pokemon.nivel, pokemonNewLevel),
        }
      : pokemon
  );
};

const constructPokedx = () => {
  rl.question(
    "O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n",
    function (statement) {
      if (
        statement == "registrar" ||
        statement == "Registrar" ||
        statement == 1
      ) {
        rl.question("Qual o nome do pokemon? \n", function (namePokemon) {
          rl.question("Qual o nível do pokemon? \n", function (levelPokemon) {
            rl.question("Qual o tipo do pokemon? \n", function (typePokemon) {
              const pokemon = {
                id: db.pokemons.length + 1,
                nome: namePokemon,
                nivel: parseInt(levelPokemon),
                tipo: typePokemon.split(", "),
              };

              db.pokemons.push(pokemon);
              console.table(db.pokemons);

              rl.close();
            });
          });
        });
      } else if (
        statement == "treinar" ||
        statement == "Treinar" ||
        statement == 2
      ) {
        rl.question("Qual o ID do pokemon? \n", function (idPokemon) {
          if (verifyHasPokemonInDb(idPokemon) == -1) {
            console.log(
              `\n ID ${idPokemon} do Pokemon não encotrado. Tente outra vez`
            );

            constructPokedx();
          }

          rl.question("Quantos níveis quer adicionar? \n", function (
            levelPokemon
          ) {
            console.table(upgradedPokemonLevel(idPokemon, levelPokemon));

            rl.close();
          });
        });
      } else {
        console.log("Opção inválida! Escolha (1)registrar ou (2)treinar");

        constructPokedx();
      }
    }
  );
};

constructPokedx();
