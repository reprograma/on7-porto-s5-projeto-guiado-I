const nomes = ["Anna", "Andressa", "Luciana", "Bruna", "Amanda"];

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
