import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { TodosController } from "./Controllers/TodosController.js";


class App {
  weatherController = new WeatherController()
  quotesController = new QuotesController()
  imagesController = new ImagesController()
  todosController = new TodosController()
}

window["app"] = new App();
