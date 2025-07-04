const apiKey = "988faf8c3d166b8979ef6864c29d68a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error");
const weatherBox = document.querySelector(".weather");
const card = document.querySelector(".card");
const cityNameEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

async function checkWeather(city) {
  try {
    searchBtn.disabled = true;
    searchBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
    errorBox.style.display = "none";

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       
    if (!response.ok) {
      if (response.status == 404) {
        showError("City not found!");
      } else {
        showError("Something went wrong. Please try again.");
      }
     return;
    }

    const data = await response.json();
    cityNameEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
    tempEl.innerHTML = Math.round(data.main.temp) + "°c";
    humidityEl.innerHTML = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "./assets/clouds.png";
        card.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
        break;
      case "Clear":
        weatherIcon.src = "./assets/clear.png";
        card.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
        break;
      case "Rain":
        weatherIcon.src = "./assets/rain.png";
        card.style.background = "linear-gradient(135deg, #00c6fb, #005bea)";
        break;
      case "Drizzle":
        weatherIcon.src = "./assets/drizzle.png";
        card.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
        break;
      case "Mist":
        weatherIcon.src = "./assets/mist.png";
        card.style.background = "linear-gradient(135deg, #d7d2cc, #304352)";
        break;
      default:
        weatherIcon.src = "./assets/clouds.png";
        card.style.background = "linear-gradient(135deg, #00feba, #5b548a)";
    }

    weatherBox.classList.add("show");
    errorBox.style.display = "none";
    localStorage.setItem("lastCity", city);

  } catch (error) {
    showError("Network error. Please check your connection.");
  } finally {
    searchBtn.disabled = false;
    searchBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
  }
}

function showError(message) {
  errorBox.innerHTML = message;
  errorBox.style.display = "block";
  weatherBox.classList.remove("show");
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city === "") {
    showError("Please enter a city name!");
  } else {
    checkWeather(city);
  }
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// Load last searched city
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    searchBox.value = lastCity;
    checkWeather(lastCity);
  }
});
