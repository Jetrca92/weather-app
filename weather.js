function getWeather(city) {
    return fetch('http://api.weatherapi.com/v1/current.json?key=c72c34d241764345bb3103504231903&q=' + city + '&aqi=no', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .catch(function(err) {
        console.log('Error!');
    });
}


function createWeatherInfo() {
    const weatherInfo = document.querySelector('.weather-info');
    const weatherDescription = document.createElement('div');
    const weatherLocation = document.createElement('div');
    const weatherDate = document.createElement('div');
    const weatherTemperature = document.createElement('div');
    const weatherInfoIcon = document.createElement('div');
    const searchLocation = document.createElement('div');

    weatherDescription.setAttribute('class', 'weather-description');
    weatherLocation.setAttribute('class', 'weather-location');
    weatherDate.setAttribute('class', 'weather-date');
    weatherTemperature.setAttribute('class', 'weather-temperature');
    weatherInfoIcon.setAttribute('class', 'weather-info-icon');
    searchLocation.setAttribute('class', 'search-location-div')

     
    getWeather('Celje')
    .then(function(response) {
        weatherDescription.innerHTML = response.current.condition.text;
        weatherLocation.innerHTML = response.location.name;
        weatherDate.innerHTML = response.location.localtime;
        weatherTemperature.innerHTML = response.current.temp_c + " °C";
        weatherInfoIcon.innerHTML = `<img class="icon" src="https:${response.current.condition.icon}">`;
        searchLocation.innerHTML = '<input class="search-location-input" placeholder="Search Location..."></input><div class="search"></div>';
    });

    weatherInfo.appendChild(weatherDescription);
    weatherInfo.appendChild(weatherLocation);
    weatherInfo.appendChild(weatherDate);
    weatherInfo.appendChild(weatherTemperature);
    weatherInfo.appendChild(weatherInfoIcon);
    weatherInfo.appendChild(searchLocation);
}

function createWeatherDetails() {
    const feelsLike = document.createElement('div');
    const humidity = document.createElement('div');
    const rainChance = document.createElement('div');
    const wind = document.createElement('div');
    const feelsLikeIcon = document.createElement('div');
    const humidityIcon = document.createElement('div');
    const rainChanceIcon = document.createElement('div');
    const windIcon = document.createElement('div');

    feelsLike.setAttribute('class', 'weather-details');
    humidity.setAttribute('class', 'weather-details');
    rainChance.setAttribute('class', 'weather-details');
    wind.setAttribute('class', 'weather-details');
    feelsLikeIcon.setAttribute('class', 'weather-details-icon');
    humidityIcon.setAttribute('class', 'weather-details-icon');
    rainChanceIcon.setAttribute('class', 'weather-details-icon');
    windIcon.setAttribute('class', 'weather-details-icon');

    feelsLikeIcon.innerHTML = "<img src='temperature.png'>"
    humidityIcon.innerHTML = "<img src=''>"
    rainChanceIcon.innerHTML = "<img src=''>"
    windIcon.innerHTML = "<img src=''>"
}
createWeatherInfo();