import { appState } from "../AppState.js"

class ThemeService {
    toggleTheme() {
        if (appState.theme == 'light') {
            appState.theme = 'dark'
        } else if (appState.theme == 'dark') {
            appState.theme = 'light'
        }
    }
}

export const themeService = new ThemeService()