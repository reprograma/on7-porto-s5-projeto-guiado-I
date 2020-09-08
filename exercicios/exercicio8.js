const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

// 8. Filtre uma lista de nomes e retorne 
//somente os que começam com a letra 'A'

const filterItems = (letters) => {
    return nomes.filter(name => name.indexOf(letters) > -1);
} 

console.log(filterItems('A'));

//  [ 'Anna', 'Andressa', 'Amanda' ]