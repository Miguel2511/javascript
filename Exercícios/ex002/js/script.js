function carregar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var divImg = document.getElementById('divImg')
    var anoNasc = document.getElementById('ano')
    var test = toString(anoNasc.value)
    var idade = ano - anoNasc.value
    console.log(ano)
    console.log(anoNasc.value)
    console.log(typeof(test))
    console.log(test[0])
  
}