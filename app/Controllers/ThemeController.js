import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { themeService } from "../Services/ThemeService.js";



function _setTheme() {
    let themeButton = appState.theme == 'light' ? '<span class="mdi mdi-weather-sunny"></span>' : '<span class="mdi mdi-moon-waxing-crescent"></span>'
    document.body.className = appState.theme
    setHTML('theme-button', themeButton)
}

export class ThemeController {
    constructor() {
        appState.on('theme', _setTheme)
        _setTheme()
    }

    toggleTheme() {
        themeService.toggleTheme()
    }
}