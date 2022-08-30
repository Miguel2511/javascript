const previusOperationText = document.querySelector('#previus-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

console.log(buttons)

class Calculator {
    // onde inicia os objetos
    // ex: obj carro na cor azul. Será iniciado aqui
    constructor(previusOperationText, currentOperationText) {
        this.previusOperationText = previusOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    // metodo que pega o numero digitado e guarda dentro de currentOperation
    addDigit(digit) {
        //check current operation
        if (digit === '.' && this.currentOperationText.innerText.includes(".")){
            return
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    processOperation(operation) {
        let operationValue
        // split(" ")[0] - separa por espaço e pega o indice zero(número) 
        const previous = +this.previusOperationText.innerText.split(" ")[0]
        const current = +this.currentOperationText.innerText

        switch(operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            default:
                return
        }
    }
    
    // metodo que vai atualizar a tela da calculadora
    updateScreen(
        operationValue = null, 
        operation = null, 
        previous = null, 
        current = null
        ) {

        console.log(operationValue, operation, previous, current)

        if(operationValue === null) {
            // o texto da calculadore recebe o numero digitado
            this.currentOperationText.innerText += this.currentOperation
        }else {
            if(previous === 0) {
                operationValue = current
            }

            this.previusOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ""
        }
        
    }


}

const calc = new Calculator(previusOperationText, currentOperationText)

//EVENTO
buttons.forEach((btn) => {      //ta chamando cada botão de btn
    btn.addEventListener("click", (e) => {      //adicionando evento de click 
        const value = e.target.innerText
        
        if (+value >= 0 || value === ".") {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
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