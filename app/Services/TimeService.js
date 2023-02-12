import { appState } from "../AppState.js"


class TimeService {

    setTime() {
        appState.time = new Date().toLocaleTimeString()
    }

}

export const timeService = new TimeService()