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
    console.log(response.data);

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
    
////let pecElement = document.querySelector("#pec");
////let pecElementElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png);
    
    


}
let apiKey = "34f95b5e87d4683b0836302b1b590869";



let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=34f95b5e87d4683b0836302b1b590869&units=metric";
axios.get(apiUrl).then(displayTemperature);


