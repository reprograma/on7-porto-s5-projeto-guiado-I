//8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];
            // [A, N, N, A] [A, N, D, R, E, S, S, A] [L, U, C, I, A, N, A] [B, R, U, N, A] [A, M, A, N, D, A]

//1ª etapa: criar array somente com nomes iniciados por "A":

const nomesComA = nomes.filter(item => item[0] === "A")
// console.log(nomesComA)

// 2ª etapa: iterar a nova array de nomes e exibí-los:

console.log(`Lista de nomes que iniciam com a letra A: `)
for (let i = 0; i < nomesComA.length; i++) {
    console.log(nomesComA[i])   
}
