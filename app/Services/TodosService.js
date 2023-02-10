import { sandbox_api } from "./AxiosService.js"

class TodosService {
    async getTodos() {
        const res = await sandbox_api.get('/joe/todos')
        console.log('[todos res.data]', res.data)
    }

}

export const todosService = new TodosService()