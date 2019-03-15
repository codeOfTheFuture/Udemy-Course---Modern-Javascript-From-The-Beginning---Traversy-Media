class Weather {
  constructor(city, state) {
    this.apiKey = '86f3550c582b416fbd7fe41ad7f73742';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.data;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}