import { appState } from "../AppState.js"
import { sandbox_api } from "./AxiosService.js"
import { Todo } from "../Models/Todo.js"

class TodosService {
    async getTodos() {
        const res = await sandbox_api.get('/joe/todos')
        appState.todos = res.data.map(t => new Todo(t))
        console.log('[appState.todos]', appState.todos)
    }

}

export const todosService = new TodosService()