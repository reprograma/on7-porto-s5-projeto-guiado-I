const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer: function(confeito) {
    console.log(`${this.nome} comeu o confeito: ${confeito}`);
  }
}
confeito[0] = "O"
pessoa.comer(confeito)

