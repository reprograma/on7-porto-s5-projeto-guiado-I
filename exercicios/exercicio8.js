const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

const nomesComInicioA = nomes.filter(function (item) {
	return item.charAt(0) == 'A';
});

console.log(nomesComInicioA);

/* Saída:
[ 'Anna', 'Andressa', 'Amanda' ]
*/