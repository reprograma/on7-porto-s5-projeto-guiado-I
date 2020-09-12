const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

pokemons [
    {
      id: 1,
      nome: 'Pikachu',
      nivel: 10,
      tipo: ['elétrico'],
    },
    {
      id: 2,
      nome: 'Bulbasaur',
      nivel: 20,
      tipo: ['grama'],
    },
    {
      id: 3,
      nome: 'Charmeleon',
      nivel: 30,
      tipo: ['fogo'],
    },
    {
      id: 4,
      nome: 'Arbok',
      nivel: 40,
      tipo: ['veneno'],
    },
    {
      id: 5,
      nome: 'Mr. Mime',
      nivel: 50,
      tipo: ['psiquico', 'fada'],
    },
    {
      id: 6,
      nome: 'Alakazam',
      nivel: 60,
      tipo: ['psiquico'],
    },
    {
      id: 7,
      nome: 'Snorlax',
      nivel: 70,
      tipo: ['normal'],
    },
    {
      id: 8,
      nome: 'Mewtwo',
      nivel: 80,
      tipo: ['psiquico'],
    },
  ]

  console.table(pokemons)

rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n', function(instrucao) {
    if (instrucao == 'registrar') {
      rl.question('Qual o nome do pokemon? \n', function(nomePokemon) {
        rl.question('Qual o nível do pokemon? \n', function(nivelPokemon) {
          rl.question('Qual o tipo do pokemon? \n', function(tipoPokemon) {
            console.log('Nome:', nomePokemon, 'Nível:', nivelPokemon, 'Tipo:', tipoPokemon)
            // Você pode remover esse console.log acima se quiser.
            // Chame AQUI a função que irá receber os valores e registrar o pokemon.
            const nome = `${nomePokemon}`
            const nivel = `${nivelPokemon}`
            const tipo = `${tipoPokemon}`
            function registrarPokemon() {
            pokemons.push[{'id':(pokemons.length + 1), 'nome': nome,'nível': nivel, 'tipo': tipo}]
            console.table(db.pokemons)}
            registrarPokemon()
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
  
          rl.close()
        });
      });
    }
    console.log(instrucao)
  });
  