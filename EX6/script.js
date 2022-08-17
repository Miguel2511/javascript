function carregar() {
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    var divInfo = document.getElementById('divInfo')
    if(numero.value.length == 0){
        window.alert('Por favor digite um numero')
        divInfo.style.display = 'none'

    }else{
        divInfo.style.display = 'block'
        var num = Number(numero.value)
        seltab.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.append(item)
            console.log(`${num} x ${c} = ${num*c}`)
        }

    }
}
