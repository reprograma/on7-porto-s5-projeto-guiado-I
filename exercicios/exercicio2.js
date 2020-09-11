const tabuadaSeis = (function (){
    let tabuada = 6
    for (let i = 1; i <= 10; i++){
        tabuada = i*6
        console.log('Tabuada com for tradicional',`6 x ${i} : ${tabuada}`)
    }
})()

const numeros = [1,2,3,4,5,6,7,8,9,10]

const tabuadaMap = numeros.map(function (item){
    return item * 6
})
console.log('Tabuada com Map',tabuadaMap)

const tabuadaArrowMap = numeros.map(item => item * 6)
console.log('Tabuada Map e Arrow',tabuadaArrowMap)