// ADD Remove & Mark Complete
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// const todos = localStorage.getItem('todos')[is STRING]
// to change it in to Array add [JSON.paran]
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

// List Item

    if(todo) {
        todoText = todo.text
    }
// List Item
    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        // // click -> toggle -> underline <- completed
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

// // by right clicking ToDo removes
            todoEl.remove()
            updateLS()
        }) 
// append child element
// append ToDo element which is the list item.
        todosUL.appendChild(todoEl)

        input.value = ''
// update local storage
        updateLS()
    }
}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(loclStorage.getItem(obj))
function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
// after even refersing the page the To Do list is remain there
    localStorage.setItem('todos', JSON.stringify(todos))
}