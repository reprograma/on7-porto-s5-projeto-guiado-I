
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const filterItems = (letters) => {
    return nomes.filter(name => name.indexOf(letters) > -1)
} 
console.log(filterItems('A'))




