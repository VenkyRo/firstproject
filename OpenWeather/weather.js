const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "1665350af34ee4fcc52dc78c93744ca7";

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();
    const city = cityInput.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }catch(error){
            console.error(error);
            diplayError(error);

        }
    }
    else{
        diplayError("please enter a city");
    }
});

async function getWeatherData(city){

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    const response = await fetch(apiurl);
    //console.log(response);

    if(!response.ok){
        throw new Error ("could not be fetch data");

    }

    return await response.json();


}

function displayWeatherInfo(data){

   // console.log(data);
   const {name:city, 
    main:{temp,humidity},
    weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15 )*(9/5) + 32).toFixed(1)}°F`
    humidityDisplay.textContent = `Humidity:${humidity}`
    descDisplay.textContent = description;
    weatherEmoji.textContent = displayEmojy(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weaherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);


}

function displayEmojy(wheatherId){
    switch(true){
        case (wheatherId >= 200 && wheatherId < 300):
            return "⛈️";

        case (wheatherId >= 300 && wheatherId < 400):
            return "🌧️";


        case (wheatherId >= 500 && wheatherId < 600):
            return "🌧️";

        case (wheatherId >= 600 && wheatherId < 700):
            return "❄️";

        case (wheatherId >= 700 && wheatherId < 800):
            return "🌫️";

        case (wheatherId == 800):
            return "🌞";

        case (wheatherId >= 801 && wheatherId < 810):
            return "☁️";

        default:
            return "⁉️";
    }

}
function diplayError(messeage){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = messeage;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}