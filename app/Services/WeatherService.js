import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandbox_api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await sandbox_api.get('/weather')
        appState.weather = new Weather(res.data.main)
        console.log('[appState.weather]', appState.weather)
    }

    calculateTemperature() {
        let tempInKelvin = appState.weather.temp
        let tempInFahrenheit = ((tempInKelvin - 273.15) * (9 / 5)) + 32
        console.log('[K]', tempInKelvin, '[F]', tempInFahrenheit)
    }
}

export const weatherService = new WeatherService()