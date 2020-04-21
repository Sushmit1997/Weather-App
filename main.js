const api ={
    key: "8ccc7f76b016feba98af18dbd3544e33",
    /* baseurl: "http://api.openweathermap.org/data/2.5/" */

    
}
window.onload = todaydate();

if (location.protocol === 'http:') {
    var baseurl;
    baseurl = 'http://api.openweathermap.org/data/2.5/';
 } else {
    baseurl = 'https://api.openweathermap.org/data/2.5/';
 }


 
//Default Location Selection

 var markup = `
 <input class="input_location1" type= "text" placeholder="(KTM) Enter Your Location"> <br> <button class="btn4 btn-dark" onclick="displayquery()"> <i class="fa fa-check"></i></button> `

var lauda = async function() {
    console.log('Working');
    await clearArea();
    document.querySelector('.btn2').innerHTML = markup;
}


var clearArea = () => {
    document.querySelector('.btn2').insertAdjacentHTML = '';
}


var displayquery =  () => {
    var location = document.querySelector('.input_location1').value;
    console.log(location);
    localStorage.setItem('location1', location);
    window.location.reload();
    setDefault();
    console.log(`Your Default Location is ${localStorage.getItem('location1')}`);
    
}

var setDefault = () => {
    document.querySelector('.btn2').innerHTML = ` <button onclick="lauda()">Set Default</button>`;

}




const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


window.onload = getResults(localStorage.getItem('location1'));




function btnclick(){
 
        getResults(searchbox.value);
    

}
function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        
    }
}

function getResults(query){
    fetch(`${baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}


function displayResults(weather){
    var month =['January', 'February', 'March', 'April','May','June','July', 'August','September','October','November','December'];
    var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = new Date().getDate();
    var day = new Date().getDay();
    var year = new Date().getFullYear();
    var monthz = new Date().getMonth();
    var today = document.querySelector('.location .date');
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°C`;
    let current = document.querySelector('.current .weather');
    current.innerText = `${weather.weather[0].main}`;
    let maxmin = document.querySelector('.current .hi-low');
    maxmin.innerText =`${Math.round(weather.main.temp_max)}°C /${Math.round(weather.main.temp_min)}°C`;
   
    today.innerText = `${days[day]} ${month[monthz]} ${date}, ${year} `;

}

function todaydate(){
    var month =['January', 'February', 'March', 'April','May','June','July', 'August','September','October','November','December'];
    var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = new Date().getDate();
    var day = new Date().getDay();
    var year = new Date().getFullYear();
    var monthz = new Date().getMonth();
    var today = document.querySelector('.location .date');
    today.innerText = `${days[day]} ${month[monthz]} ${date}, ${year} `;

}





// var date = new Date().getDate();
// console.log(date);

// var day = new Date().getDay() + 1;
// console.log(day);

// var year = new Date().getFullYear();
// console.log(year);

// var month = new Date().getMonth() + 1;
// console.log(month);

// var weekday = new Date().getUTCDay();
// console.log(weekday);


