import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"

export class ImagesController {
    constructor() {
        this.getImages()
    }

    async getImages(){
        try {
            await imagesService.getImages()
        } catch (error) {
            console.error('[getImages error]')
            Pop.error(error)
        }
    }
}