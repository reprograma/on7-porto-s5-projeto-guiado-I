const db = require('./database')
const readline = require('readline');
const { parse } = require('path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
  if (instrucao == 'registrar') {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
          function registrandoPokemon(nome, nivel, tipo) {
              const novoPokemon = {
                  id: db.pokemons.length +1,
                  nome,
                  nivel: parseInt(nivel),
                  tipo: tipo.split()
                }
                  const newPokemons = (db.pokemons)
                  newPokemons.push (novoPokemon)
                  console.table(newPokemons)
              } 

                registrandoPokemon(nomePokemon, nivelPokemon, tipoPokemon)
   
          rl.close()
        });
      });
    });
  } else {
    rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
      rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        console.log('ID:', idPokemon, 'Níveis:', niveisPokemon)
        // Você pode remover esse console.log acima se quiser.
        // Chame AQUI a função que irá receber os valores e treinar o pokemon.
        
    
        function treinandoPokemon(id, niveis) {
          const treinoPokemon = {
             id: db.pokemons.length+1 
                      
               }
                             
                 const newId = (db.pokemons)
                    newId.push (treinoPokemon)
                   console.table(newId)  
  
               treinandoPokemon(id, niveis)
  
          rl.close()
      };
  });
  });
          console.log(instrucao)
  }})