//função que adiciona tarefa
function addTask() {

    // titulo da tarefa (INPUT)
    const taskTitle = document.querySelector("#input-task-title")
    var task = taskTitle.value  //valor do input(o que está dentro, escrito no input)
    const list = document.querySelector("#task-list")
    console.log(taskTitle)
    
    if (task) {
        console.log("entrei no if")
        //clona o template html
        const template = document.querySelector(".template")
        var newTask = template.cloneNode(true)

        //adiciona o titulo
        newTask.querySelector(".task-title").textContent = task
        console.log(task)
        
        //remove as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adicionar dentro da UL
        list.appendChild(newTask)
        taskTitle.value = ''  //limpar a area de texto do input

        //botão de close
        newTask.querySelector(".icon-close").addEventListener("click", function() {
            removeTask(this)
        })

        //botão de check
        newTask.querySelector(".icon-check").addEventListener("click", function() {
            check(this)
        })
    }
}

function teste() {
    console.log("teste")
}

function check(task) {
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
}

function removeTask(task) {
    task.parentNode.remove(true)
}