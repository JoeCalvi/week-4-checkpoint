import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawTodos() {
    let template = ''
    appState.todos.forEach(todo => template += todo.TodoListTemplate)
    setHTML('todo-list', template)
}

export class TodosController {
    constructor() {
        this.getTodos()
        _drawTodos()
        appState.on('todos', _drawTodos)
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error('[getTodos error]')
            Pop.error(error)
        }
    }
}