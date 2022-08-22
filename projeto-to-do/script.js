function docId(idElemento) {
    var id = document.getElementById(idElemento)
    return id
}

function add() {
    console.log('entrei no add')
    var inputTarefa = docId('input-tarefa')
    var conteuodListaTarefa = docId('input-lista-tarefa')
    var formListaTarefa = docId('form-lista-tarefa')
    var liTarefa = docId('li-tarefa')
    var ulTarefa = docId('ul-tarefa')
    var novaLi = document.createElement('li')
    // console.log(inputTarefa.value)
    // console.log(listaTarefa)
    // console.log(novaLi)
    // console.log(ulTarefa)
    
    ulTarefa.appendChild(novaLi)
    novaLi.appendChild(conteuodListaTarefa)
    formListaTarefa.style.display = ('flex')
    conteuodListaTarefa.innerHTML += ('teste')

}