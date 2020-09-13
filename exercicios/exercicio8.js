const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

function filtraA (arr) {
    const palavrasA = []
       for (let i = 0; i < arr.length; i++){
         if (arr[i][0] == "A") {
          palavrasA.push(arr[i])
         
       }
       }
    console.log(palavrasA)
    }

filtraA(nomes)