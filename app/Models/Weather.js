
export class Weather {
    constructor(data) {
        this.feels_like = data.feels_like
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.temp_min = data.temp_min
        this.humidity = data.humidity
    }
}