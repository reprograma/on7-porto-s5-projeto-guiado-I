const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

function filtraA (arr) {
    const palavrasA = []
       for (let i = 0; i < arr.length; i++){
         if (arr[i][0] == "a" || arr[i][0] == "á" || arr[i][0] == "A" || arr[i][0] == "Á") {
          palavrasA.push(arr[i])
         
       }
       }
    console.log(palavrasA)
    }

filtraA(nomes)