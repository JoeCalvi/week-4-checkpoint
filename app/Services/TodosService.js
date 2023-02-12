import { appState } from "../AppState.js"
import { sandbox_api } from "./AxiosService.js"
import { Todo } from "../Models/Todo.js"

class TodosService {
    async getTodos() {
        const res = await sandbox_api.get('/joe/todos')
        appState.todos = res.data.map(t => new Todo(t))
        console.log('[appState.todos]', appState.todos)
    }

    async addTodo(formData) {
        const res = await sandbox_api.post('/joe/todos', formData)
        let todo = new Todo(res.data)
        appState.todos.push(todo)
        appState.emit('todos')
    }

    async removeTodo(id) {
        const res = await sandbox_api.delete('/joe/todos/' + id)
        let oldTodoIndex = appState.todos.findIndex(t => t.id == id)
        appState.todos.splice(oldTodoIndex, 1)
        appState.emit('todos')
        console.log('[appState.todos]', appState.todos)
    }

    async completeTodo(id) {
        const todoIndex = appState.todos.findIndex(t => t.id == id)
        const todo = appState.todos[todoIndex]
        const res = await sandbox_api.put(`/joe/todos/${id}`, { completed: !todo.completed })
        appState.todos.splice(todoIndex, 1, new Todo(res.data))
        appState.emit('todos')
        console.log('[complete todo]', todo)
    }

}

export const todosService = new TodosService()