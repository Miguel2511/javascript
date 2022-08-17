
var caseNum = []    //vetor para os números

function carregar() {
    numero = document.getElementById('num') //numero inserido
    tab = document.getElementById('area-tab')   //onde os números serão escritos
    divInfo = document.getElementById('divInfo')    //div que contem a area-tab
    item = document.createElement('option') //cria elemento opção
    num = Number(numero.value)  //number da variável

    if(numero.value.length == 0 ){  //testando se tem algo no campo
        window.alert('Por favor digite um número')
        divInfo.style.display = 'none'
        console.log('IF')

    }else if (numero.value < 1 || numero.value > 100) { //testando se o número atende o requisito de ser entre 1 e 100
        window.alert('Por favor digite um número válido')
        console.log('ELSE IF1')

    }else if (caseNum.indexOf(num) != -1) { //testando se o numero é repetido
        window.alert('Esse número já foi usado, digite outro.')
        console.log('ELSE IF2')

    }else{  //tudo certo, adicionando o numero ao vetor 'caseNum'
        console.log('ELSE')
        divInfo.style.display = 'block'
        caseNum.push(num)   //adiciona o numero dentro do vetor
        item.text = `Valor ${num} adicionado`  //escreve dentro da opção
        tab.appendChild(item)   //declara o item como filho da tabela
    }

    // console.log(caseNum)
    // console.log(caseNum.indexOf(num))
}

function finalizar() {
    var info = document.getElementById('info')
    var nCadastrados = caseNum.length
    info.innerHTML = (`Ao todo, temos ${nCadastrados} números cadastrados.<br>`)
    var maiorNum = caseNum.sort(function(a, b){return a-b})
    
    var soma = 0
    for (var c = 0; c < caseNum.length; c++) {  //soma os valores
        soma += caseNum[c]
    }

    var media = (soma / caseNum.length)
    console.log('media')
    info.innerHTML += (`O maior valor informado foi ${maiorNum[nCadastrados - 1]}.<br>`)
    info.innerHTML += (`O menor valor informado foi ${maiorNum[0]}.<br>`)
    info.innerHTML += (`Somando todos os valores, temos ${soma}.<br>`)
    info.innerHTML += (`A média dos valores digitados é:  ${media}<br>`)
}

function limpar() {
    console.log(caseNum)
    console.log('LIMPAR')
    tab.innerHTML = ``  //escreve dentro da opção
    caseNum = []
    console.log(caseNum)
    // info.innerHTML = ''
}
