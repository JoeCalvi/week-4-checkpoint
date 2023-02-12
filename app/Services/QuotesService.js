import { appState } from "../AppState.js"
import { sandbox_api } from "./AxiosService.js"
import { Quote } from "../Models/Quote.js"

class QuotesService {
    async getQuotes() {
        const res = await sandbox_api.get('/quotes')
        appState.quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()