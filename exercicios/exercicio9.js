const bala = ['[<O>]'];
bala[0]= '0'
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu a bala: ${bala}`);
  }
}
pessoa.comer(bala)