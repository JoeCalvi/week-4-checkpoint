import { quotesService } from "../Services/QuotesService.js"
import { Pop } from "../Utils/Pop.js"

export class QuotesController {
    constructor() {
        this.getQuotes()
    }

    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            console.error('[getQuotes error]')
            Pop.error(error)
        }
    }
}