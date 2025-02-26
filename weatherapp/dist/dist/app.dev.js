"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = void 0;

var weatherForm = document.querySelector('.weatherForm');
var cityInput = document.querySelector('.cityInput');
var card = document.querySelector('.card');
var apikey = "19f498f9dabe3b5feeea868e1d121442";
weatherForm.addEventListener("submit", function (event) {
  return __awaiter(_this, void 0, void 0, function () {
    var city, weatherData, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          event.preventDefault();
          city = cityInput.value;
          if (!city) return [3
          /*break*/
          , 5];
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , getWeatherData(city)];

        case 2:
          weatherData = _a.sent();
          displayWeatherInfo(weatherData);
          return [3
          /*break*/
          , 4];

        case 3:
          error_1 = _a.sent();
          console.error(error_1);
          displayError(error_1);
          return [3
          /*break*/
          , 4];

        case 4:
          return [3
          /*break*/
          , 6];

        case 5:
          displayError("Please enter a city name");
          _a.label = 6;

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
});

function getWeatherData(city) {
  return __awaiter(this, void 0, void 0, function () {
    var apiUrl, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey;
          return [4
          /*yield*/
          , fetch(apiUrl)];

        case 1:
          response = _a.sent();

          if (!response.ok) {
            throw new Error("could not fetch weather data");
          }

          return [4
          /*yield*/
          , response.json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
}

function displayWeatherInfo(data) {
  var city = data.name,
      _a = data.main,
      temp = _a.temp,
      humidity = _a.humidity,
      _b = data.weather[0],
      description = _b.description,
      id = _b.id;
  card.textContent = "";
  card.style.display = "flex";
  var cityDisplay = document.createElement("h1");
  var tempDisplay = document.createElement("p");
  var humidityDisplay = document.createElement("p");
  var descDisplay = document.createElement("p");
  var weatherEmoji = document.createElement("p");
  cityDisplay.textContent = city;
  tempDisplay.textContent = (temp - 273.15).toFixed(1) + "\xB0C";
  humidityDisplay.textContent = "Humidity: " + humidity + "%";
  descDisplay.textContent = description;
  weatherEmoji.textContent = getweatherEmoji(id);
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("desDisplay");
  weatherEmoji.classList.add("weatheremoji");
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getweatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId <= 300:
      return "⛈️";

    case weatherId >= 300 && weatherId <= 400:
      return "🌧️";

    case weatherId >= 500 && weatherId <= 600:
      return "🌧️";

    case weatherId >= 600 && weatherId <= 700:
      return "❄️";

    case weatherId >= 700 && weatherId <= 800:
      return "🌫️";

    case weatherId === 800:
      return "☀️";

    case weatherId >= 801 && weatherId < 810:
      return "☁️";

    default:
      return "🤷‍♂️";
  }
}

function displayError(message) {
  var errorDisplay = document.createElement("P");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}