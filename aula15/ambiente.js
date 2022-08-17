// let num = []
// console.log(`Vetor: ${num}`)
// num[0] = 1
// console.log(`Vetor: ${num}`)
// num[2] = 3
// console.log(`Vetor: ${num}`)
// num[1] = 2
// console.log(`Vetor: ${num}`)
// console.log(`Vetor: ${num.length}`)

function parimpar (n) {
    if (n % 2 == 0) {
        return 'PAR!'
    }else {
        return 'ÍMPAR!'
    }
}

console.log(parimpar(5))