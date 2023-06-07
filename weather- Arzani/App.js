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
    let h2 = document.querySelector("h2");
    h2.innerHTML = (response.data.main.name);
    let discriptionElement = document.querySelector("#discription");
    discriptionElement.innerHTML = (response.data.weather[0].description);



}
let apiKey = "8c9ed161b7a56781d05fc16010f140c3";
let apiUrl = " https://api.openweathermap.org/data/2.5/weather?q=London&appid=34f95b5e87d4683b0836302b1b590869&units=metric";
axios.get(apiUrl).then(displayTemperature);


