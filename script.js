var searchbutton=document.getElementById("searchbutton")
searchbutton.addEventListener("click",function(){
    var city = document.getElementById("cityname").value 
    console.log ("city",city)
    getCurrentWeatherForcast(city)
    Weatherchannel(city)
})

var API = "472f3a462f6a32d740d1283d55117111"

function getCurrentWeatherForcast(city){
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`
    console.log(queryURL)
    fetch(queryURL)
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        var htmlCard = `
        <div class="card" style="width: 18rem;">
        <h3>${city}
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="..."></h3>
  <div class="card-body">
    <h5 class="card-title">Description: ${data.weather[0].description}</h5>
    <p class="card-text">humidity: ${data.main.humidity}</p>
    <p class="card-text">humidity: ${data.main.temp}</p>
    <p class="card-text">wind speed: ${data.wind.speed}</p>
  
  </div>
</div>
        `
       document.getElementById("current").innerHTML= htmlCard 
    })

}

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
function Weatherchannel(city){
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=imperial`
    console.log(queryURL)
    fetch(queryURL)
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        var htmlCard = ``
        for(let i=0;i<data.list.length;i=i+8){
            htmlCard +=
        `
        <div class="card" style="width: 18rem;">
        <p>${data.list[i].dt_txt}</p>
       
        <h3>Temp: ${data.list[i].main.temp}
  <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="..."></h3>
 </h3>
  <div class="card-body">
    <h5 class="card-title">Description: ${data.list[i].weather[0].description}</h5>
    <p class="card-text">humidity: ${data.list[i].main.humidity}</p>
    <p class="card-text">wind speed: ${data.list[i].wind.speed}</p>
  
  </div>
</div>
        `
        }
       document.getElementById("five").innerHTML= htmlCard 
    })

}