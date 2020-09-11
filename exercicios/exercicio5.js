const notas = [5, 4, 3, 0, 10]


// let total = 0;


//     for (let i = 0; i < notas.length; i++){
//         total += notas[i];
//     }
//  console.log(total)



// Usando o Reduce


let total = notas.reduce(function(total, notas){
   return total + notas;
}, 0);
 console.log(total)