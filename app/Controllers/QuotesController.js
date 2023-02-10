import { appState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"


function _drawQuotes() {
    let quote = appState.quote
    setText('quote', `"${quote.content}"`)
    setText('quote-author', `- ${quote.author}`)
}

export class QuotesController {
    constructor() {
        this.getQuotes()
        appState.on('quote', _drawQuotes)
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