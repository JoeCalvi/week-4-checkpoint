import { sandbox_api } from "./AxiosService.js"

class ImagesService {
    async getImages() {
        const res = await sandbox_api.get('/images')
        console.log('[images res.data]', res.data)
    }
}

export const imagesService = new ImagesService()