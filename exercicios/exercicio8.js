//8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ["Anna", "Andrea", "Cassia", "Bruna", "Amanda", "Maria", "Raissa"];


let nomesComecaComA = [];
let novoIndice = 0;

function listaNomes(item, indice) {
  if (nomes[indice].indexOf("A") == 0) {
    nomesComecaComA[novoIndice] = nomes[indice];

    novoIndice++;
  }
}

nomes.forEach(listaNomes);
console.log(nomesComecaComA);