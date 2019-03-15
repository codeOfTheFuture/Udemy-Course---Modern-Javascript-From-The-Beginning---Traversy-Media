class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.city_name + ', ' + weather.state_code;

    this.desc.textContent = weather.weather.description;

    this.string.textContent = `${Math.floor((weather.temp * 9/5) + 32)}${String.fromCharCode(176)} F (${weather.temp}${String.fromCharCode(176)} C)`;

    this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`);

    this.humidity.textContent = `Relative Humidity: ${weather.rh}%`;

    this.feelsLike.textContent = `Feels Like: ${Math.floor((weather.app_temp * 9/5) + 32)}${String.fromCharCode(176)} F (${weather.temp}${String.fromCharCode(176)} C)`;

    this.dewpoint.textContent = `DewPoint: ${Math.floor((weather.dewpt * 9/5) + 32)}${String.fromCharCode(176)} F (${weather.temp}${String.fromCharCode(176)} C)`;

    this.wind.textContent = `Wind: From the ${weather.wind_cdir} at ${Math.floor(weather.wind_spd * 2.2369)} MPH`;
  }
}