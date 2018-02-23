const cityName = document.querySelector('h3');
const tempMax = document.querySelector('.temp-max');
const tempMin = document.querySelector('.temp-min');
const tempFormat = document.querySelector('.temp-format');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.weather-icon');
const weatherDetails = document.querySelector('.weather');

let celsius, fahrenheit, tempMaxNum, tempMinNum, weather;


// User Story: I can see the weather in my current location.
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function getCoords(position) {
    const { latitude: userLat, longitude: userLon } = position.coords;
    endpoint = `https://fcc-weather-api.glitch.me/api/current?lat=${userLat}&lon=${userLon}`;
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => setInfo(data));
}

function setInfo(data) {
    console.log(data);

    cityName.textContent = data.name;
    tempMaxNum = data.main.temp_max;
    tempMinNum = data.main.temp_min;
    celsius = Math.floor(data.main.temp);
    fahrenheit = Math.floor((data.main.temp * 9 / 5) + 32);

    tempMax.textContent = tempMaxNum + '°';
    tempMin.textContent = tempMinNum  + '°';
    temp.textContent = celsius;
    weather = data.weather[0].main;
    weatherDetails.textContent = weather;
}

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
switch (weather) {
    case 'Rain':
        icon.appendChild(document.querySelector('.rainy'));
        break;

    case 'Thunderstorm':
        icon.appendChild(document.querySelector('.thunder-storm'));
        break;

    case 'Snow':
        icon.appendChild(document.querySelector('.flurries'));
        break;

    case 'Clear':
        icon.appendChild(document.querySelector('.sunny'));
    break;
    
    default:
        icon.appendChild(document.querySelector('.cloudy'));
}

// User Story: I can push a button to toggle between Fahrenheit and Celsius.
function convertTemp() {
    if (parseInt(temp.textContent) === celsius) {
        temp.textContent = fahrenheit;
        tempFormat.textContent = ' °F';
        tempMax.innerHTML = `${Math.floor((tempMaxNum * 9 / 5) + 32)}°`;
        tempMin.innerHTML = `${Math.floor((tempMinNum * 9 / 5) + 32)}°`;
    } else {
        temp.textContent = celsius;
        tempFormat.textContent = ' °C';
        tempMax.textContent = `${Math.floor(tempMaxNum)}°`;
        tempMin.textContent = `${Math.floor(tempMinNum)}°`;
    }
}

getLocation();


tempFormat.addEventListener('click', convertTemp);


// animated background

// sound tied to weather