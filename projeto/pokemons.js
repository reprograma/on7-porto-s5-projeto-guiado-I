const db = require('./database')
const readline = require('readline');
const { RSA_X931_PADDING } = require('constants');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons.sort(db.pokemons.nivel).reverse(db.pokemons.nivel))


function registrarPokemon(nome, nivel, tipo) {
  const pokemon = {
      id: db.pokemons.length + 1,
      nome,
      nivel: parseInt(nivel),
      tipo: tipo.split (",")
  }
  return db.pokemons.push(pokemon)

}

function uplvl(id,nivel){

  for(var i in db.pokemons){

    if(id == db.pokemons[i].id){
      db.pokemons[i].nivel= parseInt(nivel) + parseInt(db.pokemons[i].nivel)
    if (db.pokemons[i].nivel>100){
        return parseInt(db.pokemons[i].nivel= 100)
      }
    } 
   }

   
 }

 function exitsPoke(idPoke){
  for(var i in db.pokemons){

    if(db.pokemons[i].id==idPoke){
      return db.pokemons[i].id
    }
  }
  return 0



 }



rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n', function(instrucao) {
  if (instrucao === 'registrar' || instrucao === "Registrar" || instrucao === "1") {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {

        //REGISTRAR O POKEMON
        registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon)
        console.table(db.pokemons)


          rl.close()
        });
      });
    });
  } else if (instrucao === 'treinar' || instrucao === "Treinar" || instrucao === "2") {
    var condicao= 0;
    
    rl.question('Qual o ID do pokemon? \n', function(idPokemon){
    rl.question('Quantos níveis quer adicionar? \n', function(niveisPokemon) {
        
        existePoke = exitsPoke(idPokemon);


        if(existePoke==0){
          console.log("pokemon nao existe")
        }else{
        uplvl(idPokemon, niveisPokemon);
        console.table(db.pokemons)
        
        }
        rl.close()
      });
    });
  }
  
  else {
    console.log ("Volte Sempre")
    rl.close()
  }
});
