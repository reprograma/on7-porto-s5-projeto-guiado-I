// 5. Some uma lista de notas de escola

const grades = [5, 4, 3, 0, 10]



const reducer = (accumulator, currentValue) => accumulator + currentValue
const gradesSum = grades.reduce(reducer)
console.log(gradesSum)

//22

/* 

let sum = 0

for(let i = 0; i < notas.length; i++){
    sum += grades[i]
    
}

console.log (soma)

// 22

*/ 