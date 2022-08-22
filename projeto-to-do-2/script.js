//função que adiciona tarefa
function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title")
    var task = taskTitle.value
    const list = document.querySelector("#task-list")
    console.log(taskTitle)
    
    if (task) {
        console.log("entrei no if")
        //clona o template html
        const template = document.querySelector(".template")
        var newTask = template.cloneNode(true)

        //adiciona o titulo
        newTask.querySelector(".task-title").textContent = task
        
        //remove as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adicionar dentro da UL
        list.appendChild(newTask)
        taskTitle.value = ''

        newTask.querySelector(".icon-close").addEventListener("click", function() {
            removeTask(this)
        })

        newTask.querySelector(".icon-check").addEventListener("click", function() {
            check(this)
        })
    }
}

function check(task) {
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("donee")
}

function removeTask(task) {
    task.parentNode.remove(true)
}