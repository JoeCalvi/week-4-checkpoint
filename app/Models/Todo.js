
export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
    }

    get TodoListTemplate() {
        return `
        <div class="col-12 d-flex align-items-center justify-content-between mb-2">
        <input ${this.completed ? 'checked' : ''} onchange="app.todosController.completeTodo('${this.id}')" type="checkbox" class="me-2 form-check-input" id="flexCheckDefault">
        <label for="todo">${this.description}</label>
        <button class="btn btn-outline-danger ms-2" onclick="app.todosController.removeTodo('${this.id}')"><span class="mdi mdi-delete-circle"></span></button>
        </div>
        `
    }
}