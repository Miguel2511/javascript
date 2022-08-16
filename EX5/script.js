function carregar() {
    var nInicio = document.getElementById('n-inicio')
    var nFim = document.getElementById('n-fim')
    var nPasso = document.getElementById('n-passo')
    var res = document.getElementById('divInfo')
    var ni = Number(nInicio.value)
    var nf = Number(nFim.value)
    var np = Number(nPasso.value)
    
    // CONDIÇÕES
    // tem que ter algo no Inicio / Inicio tem que ser menor que num Fim / algo em Fim / Fim tem que ser menor que Inicio / algo em Passo / Passo não pode ser menor ou igual a zero.
    if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0 || nPasso.value <= 0){
        window.alert(`[ERRO] Dados incorretos!`)    
        console.log('[ERRO] Dados incorretos!')
        res.innerHTML = `Impossível contar, preencha os campos a cima <strong>corretamente.</strong>`
    }else { 
        res.innerHTML = 'Contando: <br>'
        if (ni < nf) {
            for (var c = ni; c <= nf; c += np) {
                res.innerHTML += `${c} \u{1F449}`
                console.log(c)
            }
        }else {
            for (var c = ni; c >= nf; c -= np) {
                res.innerHTML += `${c} \u{1F449}`
                console.log(c)
            }
        }
        res.innerHTML += `\u{1F44A}`
    }
    console.log (ni, nf, np)
}