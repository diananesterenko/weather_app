let curentday = document.querySelector("#day");
let currenttime = document.querySelector("#time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
let day = days[now.getDay()];
curentday.innerHTML = day;
let hours = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  currenttime.innerHTML = `${hours}:${minutes[minute]}`;
} else {
  currenttime.innerHTML = `${hours}:${minute}`;
}
let form_input = document.querySelector("#forminput");
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);

  var hour = a.getHours();
  var min = a.getMinutes();

  var time = hour + ":" + min;

  return time;
}
function showtemp(response) {
  let temp = Math.round(response.data.main.temp);
  let tempMin = Math.round(response.data.main.temp_min);
  let tempMax = Math.round(response.data.main.temp_max);
  let wind = Math.round(response.data.wind.speed);
  let humidity = Math.round(response.data.main.humidity);
  let sunrise = Math.round(response.data.sys.sunrise);
  let sunset = Math.round(response.data.sys.sunset);
  celciusTemp = response.data.main.temp;
  console.log(response.data);
  let currTemp = document.querySelector("#currentDegree");
  let minTemp = document.querySelector("#min_temp");
  let maxTemp = document.querySelector("#max_temp");
  let currDescrip = document.querySelector(".currentweatherlabel");
  let currSpeed = document.querySelector("#speed");
  let currHumidity = document.querySelector("#humidity");
  let currSunrise = document.querySelector("#sunrise");
  let currSunset = document.querySelector("#sunset");
  let current_city = document.querySelector("#city");

  current_city.innerHTML = response.data.name;
  currTemp.innerHTML = temp;
  minTemp.innerHTML = tempMin;
  maxTemp.innerHTML = tempMax;
  currDescrip.innerHTML = response.data.weather[0].description;
  currSpeed.innerHTML = `${wind} km/h`;
  currHumidity.innerHTML = `${humidity} %`;
  currSunrise.innerHTML = timeConverter(sunrise);
  currSunset.innerHTML = timeConverter(sunset);
}

function showcity(event) {
  event.preventDefault();
  let input = document.querySelector("#search");
  let current_city = document.querySelector("#city");

  current_city.innerHTML = input.value;

  let apiKey = "48c14604b04302ce48bd992c15188679";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showtemp);
}
form_input.addEventListener("submit", showcity);
let celciusTemp = null;
function showPosition(position) {
  let apiKey = "48c14604b04302ce48bd992c15188679";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&lat=${latitude}&lon=${longitude}`;
  console.log(latitude);
  console.log(longitude);
  axios.get(apiUrl).then(showtemp);
}
function showcurrent() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentweather = document.querySelector("#current");
current.addEventListener("click", showcurrent);

let farinh = document.querySelector("#farenheit");
let celciy = document.querySelector("#celcium");

celciy.classList.add("active");
function showfarenh(event) {
  event.preventDefault();
  let currentdegree = document.querySelector("#currentDegree");
  celciy.classList.remove("active");
  farinh.classList.add("active");

  let tmp = celciusTemp * 1.8 + 32;
  currentdegree.innerHTML = Math.round(tmp);
}
function showcelc() {
  let currentdegree = document.querySelector("#currentDegree");
  farinh.classList.remove("active");
  celciy.classList.add("active");

  currentdegree.innerHTML = Math.round(celciusTemp);
}
farinh.addEventListener("click", showfarenh);
celciy.addEventListener("click", showcelc);
