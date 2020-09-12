// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

function nomeInicialA (arr) {
  const nomesA = arr.filter(nome => nome.includes('A'))
    return nomesA
}
console.log(nomeInicialA(nomes))