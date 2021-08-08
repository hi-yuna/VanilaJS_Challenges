const API_KEY = "3e2f6d2cff14f28a8971f1388971d602";

let weatherIcon = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon.substr(0, 2);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerHTML =
        "<i class='" +
        weatherIcon[icon] +
        "'></i>&nbsp;&nbsp;&nbsp;" +
        data.weather[0].main +
        " / " +
        Math.round(data.main.temp) +
        "℃";
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
