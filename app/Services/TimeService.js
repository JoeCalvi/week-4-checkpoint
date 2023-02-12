import { appState } from "../AppState.js"


class TimeService {

    setTime() {
        appState.time = new Date().toLocaleTimeString()
        console.log(appState.time)
    }

}

export const timeService = new TimeService()