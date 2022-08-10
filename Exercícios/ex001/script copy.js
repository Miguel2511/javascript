function carregar() {
    var img = document.getElementById('img')    //objeto da imagem
    var msg = document.getElementById('msg')    //objeto da divMsg
    var data = new Date()
    var hora = data.getHours()
    hora = 20
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML += 'Bom dia!'
        img.src = 'img/manha.png'
        document.body.style.background = '#f0c069'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += 'Boa tarde!'
        img.src = 'img/tarde.png'
        document.body.style.background = '#ff7a00'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = 'img/noite.png'
        document.body.style.background = '#072726'
        document.getElementsByClassName('b').style.color = 'white'
    }
}