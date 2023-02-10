import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandbox_api } from "./AxiosService.js"

class ImagesService {
    async getImages() {
        const res = await sandbox_api.get('/images')
        appState.image = new Image(res.data)
    }
}

export const imagesService = new ImagesService()