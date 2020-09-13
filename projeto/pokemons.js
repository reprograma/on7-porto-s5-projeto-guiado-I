const emoji = require('node-emoji')
const { log } = console;
const emojiMessage = emoji.emojify(message);

log(emojiMessage);
const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const message = ':mega: Bem Vindo ao Pokedesk :rocket:. '
console.table(db.pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n',
 function(instrucao) {
  if (instrucao == 'registrar'|| instrucao == 'Registrar' || instrucao =='1' ) 
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
          console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
          // Você pode remover esse console.log acima se quiser.
                 
          function pokemonregister(nome, nivel, tipo) {
            const recebepokemon = {
              id: db.pokemons.length +1,
              nome,
              nivel: parseInt(nivel), 
              tipo: tipo.split (',')
             }         
                  const newpokemons = (db.pokemons)
                   newpokemons.push(recebepokemon)
                   const congrats =emoji.get ('congratulations')
                   console.message(`\n ${namePokemon} foi registrado com sucesso ${congrats} \n`)
                   log(message)
                   console.table(newpokemons)
                       }
            pokemonregister(nomePokemon, nivelPokemon, tipoPokemon)
            
          rl.close()
        });
      });
    });
      
  else if (instrucao === 'treinar'|| instrucao === 'Treinar' || instrucao === 2) {
    function question() {
      rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
         if (!db.pokemons[idPokemon -1]) {
         const attention = emoji.get('warning')
         const message = (`Id não encontrado, attention ${attention}!`)
         log(message)  
         return question()
      } // fecha if
         rl.question('Quantos níveis quer adicionar? \n', function(levelPokemon) {
         
    }) // fecha question id
  } //fecha function
     
      
} // fecha else if

