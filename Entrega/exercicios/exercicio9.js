const bombom = ['[<O>]']

const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu a bala: ${bala}`);
  }
}

pessoa.comer(bombom[0].split('')[2])