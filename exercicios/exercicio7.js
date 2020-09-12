const valores = [2, 34, 56, 3, 9, 6, 55, 106];

function somaImpar (arr) {
	let acumulador = 0
	for (let i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0){
			acumulador += arr[i]
		}
	}
	return console.log(`A soma dos números ímpares nesta lista é ${acumulador}.`)
}
			
	
	somaImpar ([1, 3, 1000, 51, 10, 200003])
