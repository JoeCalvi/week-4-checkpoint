import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ThemeController } from "./Controllers/ThemeController.js";
import { TimeController } from "./Controllers/TimeController.js";


class App {
  weatherController = new WeatherController()
  quotesController = new QuotesController()
  imagesController = new ImagesController()
  todosController = new TodosController()
  themeController = new ThemeController()
  timeController = new TimeController()
}

window["app"] = new App();
