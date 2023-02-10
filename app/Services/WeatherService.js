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
        let tempInFahrenheit = Math.floor(((tempInKelvin - 273.15) * (9 / 5)) + 32)
        let maxTempInKelvin = appState.weather.temp_max
        let maxTempInFahrenheit = Math.floor(((maxTempInKelvin - 273.15) * (9 / 5)) + 32)
        let minTempInKelvin = appState.weather.temp_min
        let minTempInFahrenheit = Math.floor(((minTempInKelvin - 273.15) * (9 / 5)) + 32)
        appState.weather.temp = tempInFahrenheit
        appState.weather.temp_max = maxTempInFahrenheit
        appState.weather.temp_min = minTempInFahrenheit
        console.log('[Temp F]', appState.weather.temp, '[Max Temp F]', appState.weather.temp_max, '[Min Temp F]', appState.weather.temp_min)
    }
}

export const weatherService = new WeatherService()