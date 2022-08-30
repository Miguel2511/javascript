const previusOperation = document.querySelector('#previus-operation')
const currentOperation = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

console.log(buttons)

class Calculator {}

//EVENTO
buttons.forEach((btn) => {      //ta chamando cada botão de btn
    btn.addEventListener("click", (e) => {      //adicionando evento de click (e - objeto do evento)
        const value = e.target.innerText

        if(+value >= 0 || value === '.') {
            console.log(typeof value)
            console.log(value)
        }else {
            console.log(typeof value)
            console.log(value)
        }
    })
})

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const value = e.target.innerText

//         console.log(value)
//     })
// })







/*
REFERÊNCIAS ARRAY BUTTONS
0 - CE
1 - C
2 - DEL
3 - /
4 - 7
5 - 8
6 -9
7 - *
8 - 4
9 - 5
10 - 6
11 - -
12 - 1
13 - 2
14 - 3
15 - +
16 - 0
17 - .
18 - =
*/