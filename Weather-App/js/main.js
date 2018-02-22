const cityName = document.querySelector('h3');
const tempMaxMin = document.querySelector('.temp-max-min');
const temp = document.querySelector('h1');
const icon = document.querySelector('.weather-icon');


// User Story: I can see the weather in my current location.
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function getPosition(position) {
    userLat = position.coords.latitude;
    userLon = position.coords.longitude;
    endpoint = `https://fcc-weather-api.glitch.me/api/current?lat=${userLat}&lon=${userLon}`;
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => setInfo(data));
    }

function setInfo(data) {
    console.log(data);

    cityName.textContent = data.name;
    tempMaxMin.innerHTML = `${data.main.temp_max}° MAX   ${data.main.temp_min}° MIN`;
    temp.textContent = data.main.temp + ' °C';
    icon.innerHTML = data.weather[1].main;
}
// User Story: I can push a button to toggle between Fahrenheit and Celsius.

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

// animated background

// sound tied to weather