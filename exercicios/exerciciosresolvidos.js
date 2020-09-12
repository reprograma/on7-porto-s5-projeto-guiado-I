// 1. Liste números de 0 a 10 no console

function listaNumeros() {
    let num = 0
    for(let i = 0; i <= 10; i++) {
      num = i
      console.log(num)
    } 
  }
  listaNumeros()

  // 2. Liste a tabuada do 6 (do 1 ao 10)

function tabuadaSeis() {
    let num = 6
    for(let i = 1; i <= 10; i++) {
      num = i * 6
      console.log(`6 X ${i} = ${num}`)
    } 
  }
  tabuadaSeis()

  // 3. Liste uma lista de mercado

const listaDeMercado = ['maçã verde', 'manga', 'biscoito', 'requeijão', 'refrigerante', 'bolacha', 'miojo']

function mercadoLista() {
  for(let i = 0; i < listaDeMercado.length; i++) {
      console.log(listaDeMercado[i])
  }
}
mercadoLista()

// 5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

function somaNotas(arr) {
  const total = arr.reduce((total, num) => total + num, 0)
    return total
}
console.log(somaNotas(notas))