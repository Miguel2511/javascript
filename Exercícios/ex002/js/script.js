function carregar() {
    var data = new Date()
    var ano = data.getFullYear()    //var ano recebe o ano atual do sistema
    var divInfo = document.getElementById('divInfo')  //var divImg recebe a divImg
    var anoNasc = document.getElementById('ano')    //var anoNasc recebe o campo de busca ano de nascimento
    var anoNascStr = anoNasc.value + ''     //anoNascStr recebe o valor inteiro de anoNasc e transforma para str
    var sex = document.getElementsByName('sexo')    //sex recebe os campos de check dos sexos
    var genero = ''     //cria a variavel genero que é do tipo str
    var idade = ano - anoNasc.value     //idade faz o calculo para saber a idade da pessoa

    
    //escreve algumas informações no console
    // console.log(ano)    
    // console.log(anoNasc.value)
    // console.log(typeof(parseInt(idade)))
    // console.log(idade)
    // console.log(typeof(anoNascStr))
    // console.log(anoNascStr.substring(0,1))

    /*condições para que seja um ano real e válido.
    - ano nao começar com ZERO
    - ano não ser maior que ano atual
    - ano ter 4 digitos
    */
    if (anoNascStr.substring(0,1) == 0 || anoNasc.value > ano || anoNasc.value.length < 4){
        console.log(`[ERROR] anoNasc: ${anoNasc.value}`)    //exibir erro.
        window.alert('Digite um ano correto')
        divInfo.innerHTML = 'Preencha os campos a cima'
    }else{  //se estiver tudo certo vai começar a executar o cód abaixo.
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked){    //se o sexo masculino estiver marcado
            if (idade < 10) {
                genero = 'uma criança de gênero masculino'
                img.setAttribute('src', './js/manha.png')
            }else if (idade < 21){
                genero = 'um jovem de gênero masculino'
                img.setAttribute('src', './js/manha.png')
            }else if (idade < 50){
                genero = 'um adulto de gênero masculino'
                img.setAttribute('src', './js/tarde.png')
            }else {
                genero = 'um idoso de gênero masculino'
                img.setAttribute('src', './js/noite.png')
            }
        }else if (sex[1].checked){  //se o sexo feminino estiver marcado
            if (idade < 10) {
                genero = 'uma criança de gênero feminino'
                img.setAttribute('src', './js/manha.png')
            }else if (idade < 21){
                genero = 'uma jovem de gênero feminino'
                img.setAttribute('src', './js/manha.png')
            }else if (idade < 50){
                genero = 'um adulto de gênero feminino'
                img.setAttribute('src', './js/tarde.png')
            }else {
                genero = 'uma idosa de gênero feminino'
                img.setAttribute('src', './js/noite.png')
            }
        }
        //escreve na divImg as informações
        divInfo.style.textAlign = 'center'
        divInfo.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        divInfo.appendChild(img)
    }
}