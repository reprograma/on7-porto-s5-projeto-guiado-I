// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

function filtraNome (arr) {
    const lista = arr.filter(nome => nome.startsWith('A'))
    return lista
}

console.log(filtraNome(nomes))

