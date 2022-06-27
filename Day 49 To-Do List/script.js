// ADD Remove & Mark Complete
const form = document.getElementById('form')
const input = document.getElementById('input')
const ToDosUL = document.getElementById('ToDos')

// const todos = localStorage.getItem('todos')[is STRING]
// to change it in to Array add [JSON.paran]
const ToDos = JSON.parse(localStorage.getItem('ToDos'))

if(ToDos) {
    ToDos.forEach(ToDo => addToDo(ToDo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
})

function addToDo(ToDo) {
    let ToDoText = input.value

    if(ToDo) {
        ToDoText = ToDo.text
    }

    // List Item
    if(ToDoText) {
        const ToDoEl = document.createElement('Li') 
        // El -> Element
        if(ToDo && ToDo.completed) {
            ToDoEl.classList.add('completed')
        }

        ToDoEl.innerText = ToDoText
        // click -> toggle -> underline <- completed
        ToDoEl.addEventListener('click', () => {
            ToDoEl.classList.toggle('completed')
        updateLS()
    })
        

        ToDoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            // by right clicking ToDo removes
            ToDoEl.remove()
            updateLS()
        })
// append child element
// append ToDo element which is the list item.
        ToDosUL.appendChild(ToDoEl)

        input.value = ''

// update local storage
        updateLS()
    }
}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(loclStorage.getItem(obj))

function updateLS() {
    ToDosEl = document.querySelectorAll('li')

    const ToDos = []

    ToDosEl.forEach(ToDoEl => {
        ToDos.push({
            text: ToDoEl.innerText,
            completed: ToDoEl.classlist.contains
            ('completed')
        })
    })
// after even refersing the page the To Do list is remain there
    localStorage.setItem('ToDos', JSON.stringify(ToDos))
}