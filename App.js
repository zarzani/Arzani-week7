let now = new Date();
let h3 = document.querySelector("h3");
let date = now.getDate();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
h3.innerHTML = (day)+ " "+ (hour)+ ":"+ (minutes)+" " +(month)+" "+ (date);

function displayTemperature(response) {


    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = (response.data.name);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = (response.data.weather[0].description);
    let windElement = document.querySelector("#speed");
    windElement.innerHTML = (response.data.wind.speed);
    let humElement = document.querySelector("#hum");
    humElement.innerHTML = (response.data.main.humidity);
    
//let iconElement = document.querySelector("#pec");
//let iconElement.setAttribute("src", 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png)';
function search(city){
     let apiKey = "34f95b5e87d4683b0836302b1b590869";
     let city = "London";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34f95b5e87d4683b0836302b1b590869&units=metric";
axios.get(apiUrl).then(displayTemperature);

}
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
  
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
  }
  
  function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#farenhide");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }


function handlesubmit(event){
    event.perventDefault();
    let cityInputElement = document.querySelector("#input-submit");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}


}
search("London");
 let form = document.querySelector("#cityName");
 form.addEventListener("submit",handlesubmit);