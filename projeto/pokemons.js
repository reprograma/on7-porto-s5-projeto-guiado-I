const db = require('./database');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.table(db.pokemons);

function menu() {

	rl.question('Bem-vindo ao Pokedex! O que você gostaria de fazer com seus Pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair \n', instrucao => {
			if (instrucao == 'Registrar' || instrucao == 'registrar' || instrucao == 1) {
				rl.question('\n Qual o nome do pokemon? \n', (nomePokemon) => {
					rl.question('\n Qual o nível do pokemon? \n', (nivelPokemon) => {
						rl.question('\n Qual o tipo do pokemon? \n', (tipoPokemon) => {
              
              const registrarPokemon = (nome, nivel, tipo) => {
								const pokemon = {
									id: db.pokemons.length + 1,
									nome: nome,
									nivel: parseInt(nivel),
									tipo: tipo.split(', '),
                };
                
								return db.pokemons.push(pokemon);
							};

							registrarPokemon(nomePokemon, nivelPokemon, tipoPokemon);
							console.log(`\n ${nomePokemon} foi registrado na Pokedex. \n`);
							console.table(db.pokemons);
							rl.close();
						});
					});
        });
        
			}else if (instrucao == 'Treinar' || instrucao == 'treinar' || instrucao == 2) {
        question = () => {
					rl.question('Qual o ID do Pokemon? \n', idPokemon => {
						if (!db.pokemons[idPokemon - 1]) {
							console.log('Pokemon não encontrado na Pokedex. Tente novamente.');
							question();
						}
						rl.question('Quantos níveis quer adicionar? \n', niveisPokemon => {
							const treinarPokemon = (id, niveis) => {
								const novoNivel = db.pokemons[id - 1].nivel + parseInt(niveis);
								if (novoNivel > 100) {
									db.pokemons[id - 1].nivel = 100;
								} else {
									db.pokemons[id - 1].nivel = novoNivel;
								}
              };
              
							treinarPokemon (idPokemon, niveisPokemon)
							console.log(`\n ${db.pokemons[idPokemon - 1].nome} subiu de nível na Pokedex. \n`);
							const maiorNivel = db.pokemons.sort((a, b) => b.nivel - a.nivel);
							console.table(maiorNivel);
              rl.close();
          
						});
					});
        };
        question();

			} else if (instrucao == 'Sair' || instrucao == 'sair' || instrucao == 3) {
				console.log('Você saiu da Pokedex.');
				rl.close();
			} else {
				console.log('\n Instrução inválida. Escolha uma das 3 opções: Registrar, Treinar ou Sair. \n');
        menu();
			}
		});
};
menu();

/* Saída: 
┌─────────┬────┬──────────────┬───────┬────────────────────────┐
│ (index) │ id │     nome     │ nivel │          tipo          │
├─────────┼────┼──────────────┼───────┼────────────────────────┤
│    0    │ 1  │  'Pikachu'   │  10   │     [ 'elétrico' ]     │
│    1    │ 2  │ 'Bulbasaur'  │  20   │      [ 'grama' ]       │
│    2    │ 3  │ 'Charmeleon' │  30   │       [ 'fogo' ]       │
│    3    │ 4  │   'Arbok'    │  40   │      [ 'veneno' ]      │
│    4    │ 5  │  'Mr. Mime'  │  50   │ [ 'psiquico', 'fada' ] │
│    5    │ 6  │  'Alakazam'  │  60   │     [ 'psiquico' ]     │
│    6    │ 7  │  'Snorlax'   │  70   │      [ 'normal' ]      │
│    7    │ 8  │   'Mewtwo'   │  80   │     [ 'psiquico' ]     │
└─────────┴────┴──────────────┴───────┴────────────────────────┘
Bem-vindo ao Pokedex! O que você gostaria de fazer com seus Pokemons?
 1. Registrar
 2. Treinar
 3. Sair
2
Qual o ID do Pokemon?
9
Pokemon não encontrado na Pokedex. Tente novamente.
Qual o ID do Pokemon?
8
Quantos níveis quer adicionar?
15

 Mewtwo subiu de nível na Pokedex.

┌─────────┬────┬──────────────┬───────┬────────────────────────┐
│ (index) │ id │     nome     │ nivel │          tipo          │
├─────────┼────┼──────────────┼───────┼────────────────────────┤
│    0    │ 8  │   'Mewtwo'   │  95   │     [ 'psiquico' ]     │
│    1    │ 7  │  'Snorlax'   │  70   │      [ 'normal' ]      │
│    2    │ 6  │  'Alakazam'  │  60   │     [ 'psiquico' ]     │
│    3    │ 5  │  'Mr. Mime'  │  50   │ [ 'psiquico', 'fada' ] │
│    4    │ 4  │   'Arbok'    │  40   │      [ 'veneno' ]      │
│    5    │ 3  │ 'Charmeleon' │  30   │       [ 'fogo' ]       │
│    6    │ 2  │ 'Bulbasaur'  │  20   │      [ 'grama' ]       │
│    7    │ 1  │  'Pikachu'   │  10   │     [ 'elétrico' ]     │
└─────────┴────┴──────────────┴───────┴────────────────────────┘
*/

