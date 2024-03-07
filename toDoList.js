
const task = document.querySelector('#task')
const form = document.querySelector('#taskForm')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const toDoList = document.querySelector('#toDoList')
    const newTask = document.createElement('li')
    newTask.innerText = task.value
    toDoList.append(newTask)
    task.value = ''
})