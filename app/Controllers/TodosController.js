import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

export class TodosController {
    constructor() {
        this.getTodos()
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