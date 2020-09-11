const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];
/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (letters) => {
    return nomes.filter(name => name.indexOf(letters) > -1);
} 

console.log(filterItems('A'));

