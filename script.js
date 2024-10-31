const showInfo = () => {
    const cityElement = document.getElementById('cityElement');
    const city = cityElement.value;
    const apiKey = "79e74fc44d65c9541e6861c0c7e62270";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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

            // console.log(result);
            locationName.innerHTML = `
                <h1 class="three">${temp}°C</h1>
                <h2>${locName}, ${country}</h2>
                <p>${weatherDes}</p>
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
        })
        .catch((err) => {
            alert(err)
        });

        cityElement.value = '';
};