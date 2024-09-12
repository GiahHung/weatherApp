var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body'); 

async function changeWeatherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=1c61db9b56378a5abe88215481e7069e`
    let response = await fetch(apiURL);
    let data = await response.json();
    if(data.cod == 200){
    content.classList.remove('hide');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility;
    wind.innerText = data.wind.speed + 'm/s';
    sun.innerText = data.main.humidity + '%';
    let temperature = Math.round(data.main.temp - 273.15);
    value.innerText = temperature;
    shortDesc,innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString('vi');

    body.setAttribute('class', 'cold');
       if(temperature <= 40){
        body.setAttribute('class', 'hot');
       } 
       if(temperature <= 30){
        body.setAttribute('class', 'warm');
       } 
       if(temperature <= 20){
        body.setAttribute('class', 'cool');
       } 
       if(temperature <= 10){
        body.setAttribute('class', 'cold');
       }

    }else{
        content.classList.add('hide');
    }
}  

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})

changeWeatherUI('ha noi');