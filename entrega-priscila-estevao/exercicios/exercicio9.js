// 9. Uma pessoa é representada pelo objeto `pessoa`.
// Essa pessoa tem a habilidade de comer.
// A string `>(O)<` representa uma bala.
// Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem.
// O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`

const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer(confeito) {
    confeito[0] = 'O'
    console.log(`${this.nome} abriu o confeito, aqui está: ${confeito}`);
  }
}
pessoa.comer(confeito)
