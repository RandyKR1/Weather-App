const apiKey = "eac1f9287361d1d0e6d454ca6c996070"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

        if(response.status === 404){
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";

        }else{
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + '°f';
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
        
            /* -Adding image of fa for certain weather conditions
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "url or path"
        
            }
            */
        
            document.querySelector(".weather").style.display = "block";
            document.querySelector('.error').style.display = "none"

            searchBox.value="";
        }

    
}
    searchBtn.addEventListener("click", function(){
        checkWeather(searchBox.value);
});