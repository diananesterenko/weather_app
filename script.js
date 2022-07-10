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
function displayForecast() {
  let forecastEl = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col1"> <p>${day}</p> <img src="
https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/829/original/4bbff76d-be9d-44f1-824f-9f9a0a8c5435__6951FEE_.png?1657297967" alt="suncloud"><h2>25°</h2></div>`;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastEl.innerHTML = forecastHTML;
}
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
  let mainIcon = document.querySelector("#main_icon");
  current_city.innerHTML = response.data.name;
  currTemp.innerHTML = temp;
  minTemp.innerHTML = tempMin;
  maxTemp.innerHTML = tempMax;
  currDescrip.innerHTML = response.data.weather[0].description;
  currSpeed.innerHTML = `${wind} km/h`;
  currHumidity.innerHTML = `${humidity} %`;
  currSunrise.innerHTML = timeConverter(sunrise);
  currSunset.innerHTML = timeConverter(sunset);
  mainIcon.setAttribute("alt", response.data.weather[0].description);
  switch (response.data.weather[0].icon) {
    case "01d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/829/original/4bbff76d-be9d-44f1-824f-9f9a0a8c5435__6951FEE_.png?1657297967`
      );
      break;
    case "01n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/829/original/4bbff76d-be9d-44f1-824f-9f9a0a8c5435__6951FEE_.png?1657297967`
      );
      break;
    case "02d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/020/original/5.png?1657469871`
      );
      break;
    case "02n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/020/original/5.png?1657469871`
      );
      break;
    case "03d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/017/original/3.png?1657469842`
      );
      break;
    case "03n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/017/original/3.png?1657469842`
      );
      break;
    case "04d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/019/original/4.png?1657469863`
      );
      break;
    case "04n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/019/original/4.png?1657469863`
      );
      break;
    case "09d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/024/original/9.png?1657469899`
      );
      break;
    case "09n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/024/original/9.png?1657469899`
      );
      break;
    case "10d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/021/original/6.png?1657469878`
      );
      break;
    case "10n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/021/original/6.png?1657469878`
      );
      break;
    case "11d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/018/original/2.png?1657469850`
      );
      break;
    case "11n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/018/original/2.png?1657469850`
      );
      break;
    case "13d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/022/original/7.png?1657469884`
      );
      break;
    case "13n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/022/original/7.png?1657469884`
      );
      break;
    case "50d":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/023/original/8.png?1657469891`
      );
      break;
    case "50n":
      mainIcon.setAttribute(
        "src",
        `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/023/original/8.png?1657469891`
      );
      break;
  }
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
showcurrent();
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
displayForecast();
