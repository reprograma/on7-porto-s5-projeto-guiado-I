const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const emoji = require('node-emoji')

const { log } = console;
const message = ':mega: ******Bem vindo a Pokedesk******:rocket:'
const emojiMessage = emoji.emojify(message)
log(emojiMessage)

console.table(db.pokemons)

function menu() {
rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n',function(instrucao) {
  if (instrucao == 'registrar'|| instrucao == 'Registrar' || instrucao == 1 ) {
    rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
      rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
        rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
                           
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
                   const message = (`\n ++++++${nomePokemon} foi registrado com sucesso ${congrats}++++++\n`)
                   log(message)
                   console.table(newpokemons)
        }
            pokemonregister(nomePokemon, nivelPokemon, tipoPokemon)
            rl.close()
        })
      })
    })
   } else if (instrucao == 'treinar'|| instrucao == 'Treinar' || instrucao == 2) {
    function question() {
      rl.question('Qual o ID do pokemon? \n', function(idPokemon) {
         if (!db.pokemons[idPokemon -1]) {
            const attention = emoji.get('warning')
            const message = (`Id não encontrado, attention ${attention}!`)
            log(message)  
            question()
         } 
         rl.question('Quantos níveis quer adicionar? \n', function (niveisPokemon) {
          function trainPokemon (id, niveis) {
          const newLevel = db.pokemons[id - 1].nivel + parseInt(niveis)
            if(newLevel > 100) {
            db.pokemons[id - 1].nivel = 100
           } else {
            db.pokemons[id -1].nivel = newLevel
            } 
          } 
           
           trainPokemon(idPokemon,niveisPokemon)
            const strong = emoji.get("v")
            const message = (`++++++ ' ${db.pokemons[idPokemon - 1].nome} subiu de nível ${strong}! '+++++`)
            log(message) 
            const highestLevel = db.pokemons.sort( (a, b) => b.level - a.level)
            console.table(highestLevel)
            rl.close()
      }) 
    }) 
  } 
    question()
  } else if (instrucao == 'Sair' || instrucao == 'sair' || instrucao == 3) {
    console.log('Tchau, obrigada!')
    rl.close()    
      } else {
      console.log('\n Dado Inválido. Escolha Registrar ou Treinar. \n')
      menu()
     } 
   })
 }
  menu() 
      
