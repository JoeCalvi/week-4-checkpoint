
export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.complete = data.completed
    }

    get TodoListTemplate() {
        return `
        <input ${this.complete ? 'checked' : ''} onchange="app.todosController.completeTodo(${this.id})" type="checkbox" class="me-2 form-check-input">
        <label for="todo">${this.description}</label>
        <button class="btn btn-outline-danger ms-2" onclick="app.todosController.deleteTodo(${this.id})"><span class="mdi mdi-delete-circle"></span></button>
        `
    }
}