import { appState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"


function _drawWeather() {
    if (appState.weather.temp == appState.weatherInFahrenheit.temp) {
        setText('current-temp', `${appState.weatherInFahrenheit.feels_like}°F`)
        setText('high-low', `H: ${appState.weatherInFahrenheit.temp_max}° L: ${appState.weatherInFahrenheit.temp_min}°`)
    } else if (appState.weather.temp == appState.weatherInCelsius.temp) {
        setText('current-temp', `${appState.weatherInCelsius.feels_like}°C`)
        setText('high-low', `H: ${appState.weatherInCelsius.temp_max}° L: ${appState.weatherInCelsius.temp_min}°`)
    }
}


export class WeatherController {
    constructor() {
        this.getWeather()
        appState.on('weather', this.calculateTemperature)
        appState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error('[getWeather error]')
            Pop.error(error)
        }
    }

    calculateTemperature() {
        weatherService.calculateTemperature()
    }

    toggleTempUnit() {
        weatherService.toggleTempUnit()
        _drawWeather()
    }
}