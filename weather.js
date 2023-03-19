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

    weatherDescription.setAttribute('class', 'weather-description');
    weatherLocation.setAttribute('class', 'weather-location');
    weatherDate.setAttribute('class', 'weather-date');
    weatherTemperature.setAttribute('class', 'weather-temperature');
    weatherInfoIcon.setAttribute('class', 'weather-info-icon');

     
    getWeather('Celje')
    .then(function(response) {
        weatherDescription.innerHTML = response.current.condition.text;
        weatherLocation.innerHTML = response.location.name;
        weatherDate.innerHTML = response.location.localtime;
        weatherTemperature.innerHTML = response.current.temp_c + " °C";
        weatherInfoIcon.innerHTML = `<img class="icon" src="https:${response.current.condition.icon}">`;
    });

    weatherInfo.appendChild(weatherDescription);
    weatherInfo.appendChild(weatherLocation);
    weatherInfo.appendChild(weatherDate);
    weatherInfo.appendChild(weatherTemperature);
    weatherInfo.appendChild(weatherInfoIcon);
}
createWeatherInfo();