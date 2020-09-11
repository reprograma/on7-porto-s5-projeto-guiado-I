const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer: function(confeito) {
    confeito[0] = "O"
    console.log(`${this.nome} comeu o confeito: ${confeito}`);
  }

}

pessoa.comer(confeito)

