const bala = ['[<O>]'];
bala[0]= '0'
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu o confeito: ${bala}`);
  }
}
pessoa.comer(bala)