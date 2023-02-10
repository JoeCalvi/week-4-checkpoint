import { sandbox_api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await sandbox_api.get('/weather')
        console.log('[weather res.data.main]', res.data.main)
    }
}

export const weatherService = new WeatherService()