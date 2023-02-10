import { sandbox_api } from "./AxiosService.js"

class QuotesService {
    async getQuotes() {
        const res = await sandbox_api.get('/quotes')
        console.log('[quotes res.data]', res.data)
    }
}

export const quotesService = new QuotesService()