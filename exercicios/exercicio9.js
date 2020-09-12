const confeito = ['>(O)<'];
let confeitoSemPapel = confeito[0].split("")

const pessoa = {
  nome: 'Carlos',
  comer(confeitoSemPapel) {
    console.log(`${this.nome} comeu o confeito: ${confeitoSemPapel[2]}`);
  }
}

console.log(pessoa.comer(confeitoSemPapel))

