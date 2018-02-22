const cityName = document.querySelector('h3');
const tempMaxMin = document.querySelector('.temp-max-min');
const tempFormat = document.querySelector('.temp-format');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.weather-icon');

let celsius = '';
let fahrenheit = '';
let tempMax = 0;
let tempMin = 0;


// User Story: I can see the weather in my current location.
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function getCoords(position) {
    const {latitude: userLat, longitude: userLon} = position.coords;
    endpoint = `https://fcc-weather-api.glitch.me/api/current?lat=${userLat}&lon=${userLon}`;
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => setInfo(data));
    }

function setInfo(data) {
    cityName.textContent = data.name;
    tempMax = data.main.temp_max;
    tempMin = data.main.temp_min;
    celsius = Math.floor(data.main.temp);
    fahrenheit = Math.floor((data.main.temp * 9/5) + 32);

    tempMaxMin.innerHTML = `${tempMax}° MAX   ${tempMin}° MIN`;
    temp.textContent = celsius;
    icon.innerHTML = data.weather[1].main;
}
// User Story: I can push a button to toggle between Fahrenheit and Celsius.
function convertTemp() {
    if (parseInt(temp.textContent) === celsius) {
        temp.textContent = fahrenheit;
        tempFormat.textContent = ' °F';
        tempMaxMin.innerHTML = `${Math.floor((tempMax * 9/5) + 32)}° MAX   ${Math.floor((tempMin * 9/5) + 32)}° MIN`;
    } else {
        temp.textContent = celsius;
        tempFormat.textContent = ' °C';
        tempMaxMin.innerHTML = `${tempMax}° MAX   ${tempMin}° MIN`;
    }
}

getLocation();


tempFormat.addEventListener('click', convertTemp);

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

// animated background

// sound tied to weather