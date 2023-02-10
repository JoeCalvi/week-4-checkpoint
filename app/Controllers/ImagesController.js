import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawBackgroundImage() {
    document.body.style.backgroundImage = `url(${appState.image.img})`
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
}

function _drawImageAuthor() {
    setText('image-author', `Photo by ${appState.image.author}`)
}

export class ImagesController {
    constructor() {
        this.getImages()
        appState.on('image', _drawBackgroundImage)
        appState.on('image', _drawImageAuthor)
    }

    async getImages() {
        try {
            await imagesService.getImages()
        } catch (error) {
            console.error('[getImages error]')
            Pop.error(error)
        }
    }
}