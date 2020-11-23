const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const somaImpar = (arr) => {
	let acc = 0
	for (let i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0){
			acc += arr[i]
		}
	}
	return console.log(`A soma dos números ímpares nesta lista é ${acc}.`)
}

somaImpar (valores)
