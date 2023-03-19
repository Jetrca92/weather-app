function getWeather(city) {
    fetch('http://api.weatherapi.com/v1/current.json?key=c72c34d241764345bb3103504231903&q=' + city + '&aqi=no', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log('Error!');
    });
}


function createWeatherInfo() {
    let response = getWeather('Celje');
    console.log(response);
}