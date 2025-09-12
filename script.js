const card = document.createElement("div");
card.className = "weather-card";


const searchDiv = document.createElement("div");
searchDiv.className = "search";

const cityInput = document.createElement("input");
cityInput.type = "text";
cityInput.placeholder = "Enter city name";
cityInput.id = "city";

const searchBtn = document.createElement("button");
searchBtn.textContent = "Search";

searchDiv.appendChild(cityInput);
searchDiv.appendChild(searchBtn);


const errorMsg = document.createElement("p");
errorMsg.className = "error";
errorMsg.textContent = "City not found ";


const weatherDiv = document.createElement("div");
weatherDiv.className = "weather";

const icon = document.createElement("div");
icon.className = "weather-icon";
icon.textContent = "☁️";

const temp = document.createElement("h2");
temp.textContent = "--°C";

const condition = document.createElement("h3");
condition.textContent = "Weather Condition";

const details = document.createElement("div");
details.className = "details";

const humidityDiv = document.createElement("div");
const humidity = document.createElement("h4");
humidity.textContent = "Humidity: --%";
humidityDiv.appendChild(humidity);

const windDiv = document.createElement("div");
const wind = document.createElement("h4");
wind.textContent = "Wind: -- km/h";
windDiv.appendChild(wind);

details.appendChild(humidityDiv);
details.appendChild(windDiv);

weatherDiv.appendChild(icon);
weatherDiv.appendChild(temp);
weatherDiv.appendChild(condition);
weatherDiv.appendChild(details);

card.appendChild(searchDiv);
card.appendChild(errorMsg);
card.appendChild(weatherDiv);
document.body.appendChild(card);


async function getWeather(city) {
  try {
    errorMsg.style.display = "none";
    temp.textContent = "Loading...";
    condition.textContent = "Please wait...";
    icon.textContent = "";

   
    const apiKey = "c8c80249690b4cb2022d66c0993b47d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

   
    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const humidityVal = data.main.humidity;
    const windVal = data.wind.speed;


    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="icon">`;
    temp.textContent = `${Math.round(temperature)}°C`;
    condition.textContent = weatherCondition;
    humidity.textContent = `Humidity: ${humidityVal}%`;
    wind.textContent = `Wind: ${windVal} km/h`;

  } catch (err) {
    errorMsg.style.display = "block";
    temp.textContent = "--°C";
    condition.textContent = "Weather Condition";
    icon.textContent = "☁️";
    humidity.textContent = "Humidity: --%";
    wind.textContent = "Wind: -- km/h";
  }
}


searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
  }
});
