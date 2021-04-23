let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = ("Enter a city");
city = city.toLowerCase();
city = city.trim();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let hum = weather[city].humidity;
  let fahr = temperature * 1.8 + 32;

  console.log(
    `It is currently ${temperature}°C (${fahr}°fahrenheit) with a humidity of ${hum}%`
  );
} else {
  console.log(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

//Homework week 4 challenge 1

let today = new Date();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let dayNow = days[today.getDay()];
let time = today.getHours();
let minutes = today.getMinutes();

let formattedDate = `${dayNow}, ${time}:${minutes}`;
let h1 = document.querySelector("h1");
h1.innerHTML = formattedDate;

//Homework week 4 challenge 2

function locationDisplay(event) {
  event.preventDefault();
  let input = document.querySelector(".form-control");
  let changeLocation = document.querySelector(".location");
  changeLocation.innerHTML = input.value;
}

let submitButton = document.querySelector("#button-addon2");
submitButton.addEventListener("click", locationDisplay);

//Homework week 5

function showWeather(response) {
  let h2 = document.querySelector(".location");
  let city2 = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = "In " + city2 + " the weather is " + temperature + " °C";
}
function searchCity(city2) {
  let apiKey = "958613abdc96c9e579262a523950266e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let h2 = document.querySelector(".location");
  let cityInput = document.querySelector(".form-control");
  h2.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
let searchForm = document.querySelector("#cityForm");
searchForm.addEventListener("submit", handleSubmit);



