
let mc = document.getElementsByClassName("main-container");

var da = new Date();
console.log(da);



let weather = {
    "apiKey":"1a70229558a641278f210674d95f4182",
    fetchWeather: function(city){
    
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1a70229558a641278f210674d95f4182"
        ).then((response) => response.json())
     .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
    
    const {name} = data;


    const {description} = data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,description,temp,humidity,speed);
    document.querySelector(".city").innerHTML = "Weather in "+name;


document.querySelector(".date").innerHTML = "Date : "+da;



    document.querySelector(".desc").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp+"°C";
    document.querySelector(".humidity").innerHTML = "Humid "+humidity +"%";
    document.querySelector(".wind").innerHTML = "Wind "+speed+"km/h";





    },
    search: function(){
        this.fetchWeather(document.querySelector("#search-input").value);
    }

    
};
document.querySelector("#searchbtn").addEventListener("click",function(){
    weather.search();
});   
 document.querySelector("#search-input").addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        weather.search();
    }
    });

if(temp < 21){
    document.body.style.backgroundimage = url("https://source.unsplash.com/1600x900/?ice");
}





