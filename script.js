let timeoutId;

document.getElementById('cityElement').addEventListener('input', function() {
    const cityElement = document.getElementById('cityElement');
    
    // Clear any existing timeout
    clearTimeout(timeoutId);
    
    // Set new timeout to wait for user to finish typing
    timeoutId = setTimeout(() => {
        let city = cityElement.value;
        const apiKey = "79e74fc44d65c9541e6861c0c7e62270";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        if (city === "") {
            alert("Please enter a city");
            return;
        }
        
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                let temp = Math.round(result.main.temp - 273.15)
                let maxTemp = Math.round(result.main.temp_max - 273.15)
                let minTemp = Math.round(result.main.temp_min - 273.15)
                let feels = Math.round(result.main.feels_like - 273.15)
                let pressure = result.main.pressure
                
                let locName = result.name
                let weatherDes = result.weather[0].description
                let country = result.sys.country
                let humidity = result.main.humidity
                let Wind = result.wind.speed
                let icon = result.weather[0].icon
                let iconURL = `http://openweathermap.org/img/w/${icon}.png`


                switch (weatherDes) {
                    case 'clear sky':
                        
                        break;
                
                    default:
                        break;
                }
                
                
                // if(weatherDes == "clear sky" ){
                    document.body.style.background = "#f3f3f3 url('Images/pexels-bradanton-25911998.jpg') no-repeat ";
                    document.body.style.backgroundSize = "cover";
                    locationName.innerHTML = `
                        <h1 class="three">${temp}°C</h1>
                        <h2>${locName}, ${country}</h2>
                            <p>${weatherDes} <img src="${iconURL}" alt=""></p>
                            

                    `
                    weatherCon.innerHTML = `
                        <ul class="fs-5 fw-semi-bold list-unstyled mt-4 text-light">
                            <li class="mt-3">${locName}, ${country}</li>
                            <li class="mt-3">${weatherDes}</li>
                            <li class="mt-3">${humidity}%</li>
                            <li class="mt-3">${Wind}m/s</li>

                        </ul>
                    `
                    tempCon.innerHTML = `
                        <li class="mt-3">${minTemp}°C</li>
                        <li class="mt-3">${maxTemp}°C</li>
                        <li class="mt-3">${feels}°C</li>
                        <li class="mt-3">${pressure}hPa</li>
                    `
                // }    
                
            })
            .catch((err) => {
                alert(err)
            });
        
    }, 1500); // Wait 1 second after user stops typing
});