// 2. Liste a tabuada do 6 (do 1 ao 10)

// const tabuadaSeis = () => {
//     for (i = 1; i <= 10; i++) {
//         console.log(i*6)
//     }
// }

// tabuadaSeis()


const tabuadaCompleta = (num) => {
    for (i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${i * num}`)
    }
}

tabuadaCompleta(6)