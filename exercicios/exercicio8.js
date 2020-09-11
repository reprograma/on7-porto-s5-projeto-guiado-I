const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

let nomesIniciadosA = [];
let novoIndice = 0;

function nameA(nome, indice){
    if (nomes[indice].indexOf("A") == 0){
        nomesIniciadosA[novoIndice] = nomes[indice];
        novoIndice++;
    }
}

nomes.forEach(nameA);
console.log(nomesIniciadosA)