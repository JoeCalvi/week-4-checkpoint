import { appState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"


function _drawWeather() {
    let weather = appState.weather
    setText('current-temp', `${weather.temp}°F`)
    setText('high-low', `H: ${weather.temp_max}° L: ${weather.temp_min}°`)
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
}