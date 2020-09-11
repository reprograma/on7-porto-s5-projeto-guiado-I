//Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106]


/*const numerosSomados = valores.reduce(function (acumulador, itemAtual) {
    if(itemAtual % 2 !== 0){
       return acumulador + itemAtual
        
    }
    
  })
  console.log(numerosSomados)*/
  const soma = 0
  const total = valores.reduce(function(acumulador, itemAtual){
      if(itemAtual % 2 !== 0){
          soma = acumulador + itemAtual
      }
   
    return soma})
  
  console.log(total)
//---------------------



