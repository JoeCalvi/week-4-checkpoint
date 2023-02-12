import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Image } from "./Models/Image.js"
import { Quote } from "./Models/Quote.js"
import { Weather } from "./Models/Weather.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Image').Image} */
  image = null

  /** @type {import('./Models/Quote').Quote} */
  quote = null

  /** @type {import('./Models/Weather').Weather} */
  weather = null
  weatherInFahrenheit = {
    temp: null,
    feels_like: null,
    temp_max: null,
    temp_min: null
  }
  weatherInCelsius = {
    temp: null,
    feels_like: null,
    temp_max: null,
    temp_min: null
  }

  /** @type {import('./Models/Todo').Todo[]} */
  todos = []

  theme = 'light'

  time = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
