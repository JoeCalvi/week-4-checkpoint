import { appState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"

function _drawBackgroundImage() {
    console.log('draw background image')
    document.body.style.backgroundImage = `url(${appState.image.img})`
}

export class ImagesController {
    constructor() {
        this.getImages()
        appState.on('image', _drawBackgroundImage)
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