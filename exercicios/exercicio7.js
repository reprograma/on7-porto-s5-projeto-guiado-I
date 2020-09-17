const valores = [2, 34, 56, 3, 9, 6, 55, 106];

for (let i = 0; i < valores.length; i++) {
  valores[i] = i + 1;
}

let somaImpar = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] % 2 != 0) {
    somaImpar += valores[i];
  }
}

console.log(somaImpar);
