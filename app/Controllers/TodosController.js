import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawTodos() {
    let template = ''
    let todos = appState.todos
    todos.forEach(todo => template += todo.TodoListTemplate)
    setHTML('todo-list', template)
    let incompleteTasks = todos.filter(todo => todo.completed == false)
    console.log('[incomplete]', incompleteTasks)
    setText('todo-count', `Left to Do: ${incompleteTasks.length}`)
}

export class TodosController {
    constructor() {
        this.getTodos()
        _drawTodos()
        appState.on('todos', _drawTodos)
        appState.on('todos', console.log(appState.todos))
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error('[getTodos error]')
            Pop.error(error)
        }
    }

    async addTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await todosService.addTodo(formData)
            form.reset()
        } catch (error) {
            console.error('[addTodo error]')
            Pop.error(error)
        }
    }

    async removeTodo(id) {
        try {
            if (await Pop.confirm('Are you sure you want to delete this To-do?')) {
                await todosService.removeTodo(id)
            }
        } catch (error) {
            console.error('[removeTodo error]')
            Pop.error(error)
        }
    }

    async completeTodo(id) {
        try {
            await todosService.completeTodo(id)
        } catch (error) {
            console.error('[completeTodo error]')
            Pop.error(error)
        }
    }
}