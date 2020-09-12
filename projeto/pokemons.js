var exec = require('child_process').exec, child;
function mudaEncode() {
  exec('chcp 65001');
}
mudaEncode();

const db = require('./database')
const readline = require('readline-sync');
const { brotliDecompress } = require('zlib');
const { read } = require('fs');

/**
 * Método Principal.
 **/
function main() {
  let control;
  while (control != '3') {
    control = readline.question('Digite a opção correspondente ao que você gostaria de fazer com seus pokemons: \n 1. Registrar \n 2. Treinar \n 3. Sair \n')
    switch (control) {
      case '1':
        console.clear();
        pokemonRegister();
        break;
      case '2':
        console.clear();
        pokemonLevel();
        break;
      case '3':
        break;
      default:
        console.clear();
        console.log('Opção inválida');
        break;
    }
  }
}
/**
 * Método para registrar o pokemon.
 **/
function pokemonRegister() {
  let pokemon = new Object();
  pokemon.id = db.pokemons.length + 1;
  pokemon.nome = readline.question('Qual o nome do pokemon ? \n');
  pokemon.nivel = Number(readline.question('Qual o nível do pokemon? \n'));
  pokemon.tipo = pokemonTypes();
  db.pokemons.push(pokemon);
  console.table(db.pokemons);
}
/**
 * Método para retornar os tipos dos pokemons.
 **/
function pokemonTypes() {
  let types = [];
  let control;
  while (control != 'sair') {
    control = readline.question('Informe o(s) tipos do pokemon. \nAo finalizar os tipos do pokemon, para exibir sua alteração, digite sair\n');
    if (control != 'sair') {
      types.push(control);
    }
  }
  return types;
}
/**
 * Método para somar o nível dos pokemons
 **/
function pokemonLevel() {
  let boolean = true;
  let id = readline.question('Qual o ID do pokemon? \n');
  for (let a = 0; a < db.pokemons.length; a++) {
    if (db.pokemons[a].id === Number(id)) {
      let level = Number(readline.question('Quantos níveis quer adicionar? \n'));
      if ((db.pokemons[a].nivel + Number(level)) > 100) {
        db.pokemons[a].nivel = 100;
      } else {
        db.pokemons[a].nivel = db.pokemons[a].nivel + Number(level);
      }
      console.table(db.pokemons);
      boolean = false;
    }
  }
  if (boolean) {
    console.log('Pokemon não encontrado!');
  }
}
/**
 * Método para ordenar array e visualizar tabela
 */
function pokemonWiew() {
  db.pokemons.sort(function ordenar(a, b) {
    if (a.nivel > b.nivel) {
      return 1;
    }
    if (b.nivel > a.nivel) {
      return -1;
    }
    if (b.nivel === a.nivel) {
      return 0;
    }
  });
  console.table(db.pokemons);
}
pokemonWiew();
main();
