/* 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A' */

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

const retorneA = (arr) => {
    const nomesComA = arr.filter(nome => nome[0] === 'A')
    return nomesComA
}

console.log(retorneA(nomes));