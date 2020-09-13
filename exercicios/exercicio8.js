const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

for (i = 0; i < nomes.length; i++){
    console.log(nomes[i])  // Exibe os elementos da const nomes que recebe um array de strings

}
const arrayDesconstruido = ['A, N, N, A','A, N, D, R, E, S, S, A', 'L, U, C, I, A, N, A','B, R, U, N, A', 'A, M, A, N, D, A']

const nomesSeparadosPorletras = arrayDesconstruido.filter((i) => i[0] === 'A')
  
console.log(nomesSeparadosPorletras)


/*  Exibe após execução do código

Anna    
Andressa
Luciana 
Bruna   
Amanda 
[ 'A, N, N, A', 'A, N, D, R, E, S, S, A', 'A, M, A, N, D, A' ]
*/

