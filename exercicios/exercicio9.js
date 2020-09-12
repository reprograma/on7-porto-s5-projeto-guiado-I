const confeito = ['>(O)<'];
confeito[0] = '0'
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu o confeito: ${bala}`);
  }
}
pessoa.comer(confeito)