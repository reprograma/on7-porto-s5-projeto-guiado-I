const db = require("./database");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.table(db.pokemons);

const pokedex = () => {
  rl.question(
    "O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n",
    (instrucao) => {
      if (
        instrucao == "registrar" ||
        instrucao == "Registrar" ||
        instrucao == 1
      ) {
        rl.question("Qual o nome do pokemon? \n", (nomePokemon) => {
          rl.question("Qual o nível do pokemon? \n", (nivelPokemon) => {
            rl.question("Qual o tipo do pokemon? \n", (tipoPokemon) => {
              const registrarPokemon = (nome, nivel, tipo) => {
                const pokemon = {
                  id: db.pokemons.length + 1,
                  nome,
                  nivel: parseInt(nivel),
                  tipo: tipo.split(", "),
                };

                db.pokemons.push(pokemon);
                console.table(db.pokemons);
              };

              registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon);

              console.log(`\n ${nomePokemon} foi registrado com sucesso!! \n`);

              rl.close();
            });
          });
        });
      } else if (
        instrucao == "treinar" ||
        instrucao == "Treinar" ||
        instrucao == 2
      ) {
        const treinarPokemons = () => {
          rl.question("Qual o ID do pokemon? \n", (idPokemon) => {
            if (!db.pokemons[idPokemon - 1]) {
              console.log(
                `\n ${idPokemon} ID do Pokemon não encotrado. Tente outra vez`
              );
              treinarPokemons();
            }

            rl.question(
              "Quantos níveis quer adicionar? \n",
              (niveisPokemon) => {
                const addNiveisPokemon = (id, niveis) => {
                  const novoNivel =
                    db.pokemons[id - 1].nivel + parseInt(niveis);

                  if (novoNivel > 100) {
                    db.pokemons[id - 1].nivel = 100;
                  } else {
                    db.pokemons[id - 1].nivel = novoNivel;
                  }
                };

                addNiveisPokemon(idPokemon, niveisPokemon);
                console.log(
                  `\n ${db.pokemons[idPokemon - 1].nome} subiu de nível!! \n`
                );

                const subiuNivel = db.pokemons.sort(
                  (a, b) => b.nivel - a.nivel
                );

                console.table(subiuNivel);

                rl.close();
              }
            );
          });
        };

        treinarPokemons();
      } else {
        console.log("Opção inválida! Escolha (1)registrar ou (2)treinar");

        pokedex();
      }
    }
  );
};

pokedex();
