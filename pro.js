let apikey = "dea2632cda1c7609006c6fd5e1a41cb7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//its all api keysgit
const input = document.querySelector('.search input');
const button = document.querySelector('.search button');
const weatherIcon = document.querySelector('.w-icon');

async function checkWeather(city) {
    const res = await fetch(apiurl + city + `&appid=${apikey}`);
    if(res.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data  = await res.json();
    console.log(data);

    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "C";
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.hp').innerHTML= data.main.humidity + "%";
    document.querySelector('.hps').innerHTML= data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/weather-app.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/weather.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/snowy.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/snowy.png";
    }
    
    document.querySelector(".weather").style.display = "block"
    
    }
   
}
button.addEventListener("click",() =>{
    checkWeather(input.value)
})
    


