import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandbox_api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await sandbox_api.get('/weather')
        appState.weather = new Weather(res.data.main)
    }

    calculateTemperature() {
        let tempInKelvin = appState.weather.temp
        let feelsLikeInKelvin = appState.weather.feels_like
        let maxTempInKelvin = appState.weather.temp_max
        let minTempInKelvin = appState.weather.temp_min

        let tempInFahrenheit = Math.floor(((tempInKelvin - 273.15) * (9 / 5)) + 32)
        let feelsLikeInFahrenheit = Math.floor(((feelsLikeInKelvin - 273.15) * (9 / 5)) + 32)
        let maxTempInFahrenheit = Math.floor(((maxTempInKelvin - 273.15) * (9 / 5)) + 32)
        let minTempInFahrenheit = Math.floor(((minTempInKelvin - 273.15) * (9 / 5)) + 32)

        appState.weatherInFahrenheit.temp = tempInFahrenheit
        appState.weatherInFahrenheit.feels_like = feelsLikeInFahrenheit
        appState.weatherInFahrenheit.temp_max = maxTempInFahrenheit
        appState.weatherInFahrenheit.temp_min = minTempInFahrenheit

        let tempInCelsius = Math.floor(tempInKelvin - 273.15)
        let feelsLikeInCelsius = Math.floor(feelsLikeInKelvin - 273.15)
        let maxTempInCelsius = Math.floor(maxTempInKelvin - 273.15)
        let minTempInCelsius = Math.floor(minTempInKelvin - 273.15)

        appState.weatherInCelsius.temp = tempInCelsius
        appState.weatherInCelsius.feels_like = feelsLikeInCelsius
        appState.weatherInCelsius.temp_max = maxTempInCelsius
        appState.weatherInCelsius.temp_min = minTempInCelsius

        appState.weather.temp = tempInFahrenheit
        appState.weather.feels_like = tempInFahrenheit
        appState.weather.temp_max = tempInFahrenheit
        appState.weather.temp_min = tempInFahrenheit
    }

    toggleTempUnit() {
        if (appState.weather.temp == appState.weatherInFahrenheit.temp) {
            appState.weather.temp = appState.weatherInCelsius.temp
            appState.weather.feels_like = appState.weatherInCelsius.feels_like
            appState.weather.temp_max = appState.weatherInCelsius.temp_max
            appState.weather.temp_min = appState.weatherInCelsius.temp_min
        } else if (appState.weather.temp == appState.weatherInCelsius.temp) {
            appState.weather.temp = appState.weatherInFahrenheit.temp
            appState.weather.feels_like = appState.weatherInFahrenheit.feels_like
            appState.weather.temp_max = appState.weatherInFahrenheit.temp_max
            appState.weather.temp_min = appState.weatherInFahrenheit.temp_min
        }
    }
}

export const weatherService = new WeatherService()