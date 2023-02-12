import { appState } from "../AppState.js"
import { timeService } from "../Services/TimeService.js"
import { setText } from "../Utils/Writer.js"


function _drawTime() {
    setText('timeclock', appState.time)
}

export class TimeController {
    constructor() {
        setInterval(this.setTime, 1000)
    }

    setTime() {
        timeService.setTime()
        _drawTime()
    }

}
