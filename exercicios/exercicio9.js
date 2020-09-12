const confeito = ['>(O)<'];
const abrindoConfeito = ['|>(O)<|','| (0)<|', '| (O) |', ' (O)', ' O', ' o', ' .'];
const pessoa = {
	nome: 'Carlos',
	comer(confeito) {
		console.log(`${this.nome} comeu o confeito: ${abrindoConfeito}`);
	},
};
pessoa.comer(abrindoConfeito);
console.log(`Que Delícia!!!!!`)

/* Saída:
Carlos comeu o confeito: |>(O)<|,| (0)<|,| (O) |, (O), O, o, .
Que Delícia!!!!!

*/