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
        console.log(response);
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
    const weatherDetailsContainer = document.querySelector('.weather-details-container');

    const feelsLike = document.createElement('div');
    const humidity = document.createElement('div');
    const rainChance = document.createElement('div');
    const wind = document.createElement('div');
    const feelsLikeIcon = document.createElement('div');
    const humidityIcon = document.createElement('div');
    const rainChanceIcon = document.createElement('div');
    const windIcon = document.createElement('div');
    const feelLikeInfo = document.createElement('div');
    const humidityInfo = document.createElement('div');
    const rainChanceInfo = document.createElement('div');
    const windInfo = document.createElement('div');
    const feelsLikeLabel = document.createElement('div');
    const humidityLabel = document.createElement('div');
    const rainChanceLabel = document.createElement('div');
    const windLabel = document.createElement('div');
    const feelsLikeData = document.createElement('div');
    const humidityData = document.createElement('div');
    const rainChanceData = document.createElement('div');
    const windData = document.createElement('div');


    feelsLike.setAttribute('class', 'weather-details');
    humidity.setAttribute('class', 'weather-details');
    rainChance.setAttribute('class', 'weather-details');
    wind.setAttribute('class', 'weather-details');
    feelsLikeIcon.setAttribute('class', 'weather-details-icon');
    humidityIcon.setAttribute('class', 'weather-details-icon');
    rainChanceIcon.setAttribute('class', 'weather-details-icon');
    windIcon.setAttribute('class', 'weather-details-icon');
    feelLikeInfo.setAttribute('class', 'weather-details-info');
    humidityInfo.setAttribute('class', 'weather-details-info');
    rainChanceInfo.setAttribute('class', 'weather-details-info');
    windInfo.setAttribute('class', 'weather-details-info');
    feelsLikeLabel.setAttribute('class', 'weather-details-label');
    humidityLabel.setAttribute('class', 'weather-details-label');
    rainChanceLabel.setAttribute('class', 'weather-details-label');
    windLabel.setAttribute('class', 'weather-details-label');
    feelsLikeData.setAttribute('class', 'weather-details-data');
    humidityData.setAttribute('class', 'weather-details-data');
    rainChanceData.setAttribute('class', 'weather-details-data');
    windData.setAttribute('class', 'weather-details-data');

    feelsLikeIcon.innerHTML = "<img src='temperature.png' class='weather-details-icon'>";
    humidityIcon.innerHTML = "<img src='humidity.png' class='weather-details-icon'>";
    rainChanceIcon.innerHTML = "<img src='rain.png' class='weather-details-icon'>";
    windIcon.innerHTML = "<img src='wind.png' class='weather-details-icon'>";
    feelsLikeLabel.innerHTML = "Feels Like";
    humidityLabel.innerHTML = "Humidity";
    rainChanceLabel.innerHTML = "Chance of Rain";
    windLabel.innerHTML = "Wind Speed";

    getWeather('Celje')
    .then(function(response) {
        feelsLikeData.innerHTML = response.current.feelslike_c + " °C";
        humidityData.innerHTML = response.current.humidity + " %";
        rainChanceData.innerHTML = response.current.precip_in + " %";
        windData.innerHTML = response.current.wind_kph + " km/h";
    });

    feelLikeInfo.appendChild(feelsLikeLabel);
    feelLikeInfo.appendChild(feelsLikeData);
    humidityInfo.appendChild(humidityLabel);
    humidityInfo.appendChild(humidityData);
    rainChanceInfo.appendChild(rainChanceLabel);
    rainChanceInfo.appendChild(rainChanceData);
    windInfo.appendChild(windLabel);
    windInfo.appendChild(windData);

    feelsLike.appendChild(feelsLikeIcon);
    feelsLike.appendChild(feelLikeInfo);
    humidity.appendChild(humidityIcon);
    humidity.appendChild(humidityInfo);
    rainChance.appendChild(rainChanceIcon);
    rainChance.appendChild(rainChanceInfo);
    wind.appendChild(windIcon);
    wind.appendChild(windInfo);

    weatherDetailsContainer.appendChild(feelsLike);
    weatherDetailsContainer.appendChild(humidity);
    weatherDetailsContainer.appendChild(rainChance);
    weatherDetailsContainer.appendChild(wind);

}
createWeatherInfo();
createWeatherDetails();