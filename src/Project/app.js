window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".current-degree")
    let locationTimezone = document.querySelector(".location-timezone")
    let temperetureFeelsLike = document.querySelector(".feels-like-degree")
    data = JSON.parse(localStorage.getItem("data"));
    temperatureDegree.textContent = data.main.temp;
    temperetureFeelsLike.textContent = data.main.feels_like;
    locationTimezone.textContent = data.name;
    console.log(data.wind.speed);
    document.getElementById('icon').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('video').src=`./video/${data.weather[0].icon.slice(0,2)}.mp4`;
    document.getElementById('audio').src=`./sounds/${data.weather[0].icon.slice(0,2)}.mp3`;
    document.getElementById('wind').textContent = data.wind.speed + ' м/с';
    document.getElementById('gusts').textContent = data.wind.gust + ' м/с';
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('pressure').textContent = data.main.pressure*0.75 + " мм.рт.с.";
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            console.log(`https://api.openweathermap.org/data/2.5/weather?lang=ua&lat=${lat}&lon=${long}&units=metric&appid=cb3b146aedec34b82200922c16f289d9`)
            const api = `https://api.openweathermap.org/data/2.5/weather?lang=ua&lat=${lat}&lon=${long}&units=metric&appid=cb3b146aedec34b82200922c16f289d9`
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    temperatureDegree.textContent = data.main.temp;
                    temperetureFeelsLike.textContent = data.main.feels_like;
                    locationTimezone.textContent = data.name;
                    console.log(data.wind.speed);
                    document.getElementById('icon').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    document.getElementById('video').src=`./video/${data.weather[0].icon.slice(0,2)}.mp4`;
                    document.getElementById('audio').src=`./sounds/${data.weather[0].icon.slice(0,2)}.mp3`;
                    document.getElementById('wind').textContent = data.wind.speed + ' м/с';
                    document.getElementById('gusts').textContent = data.wind.gust + ' м/с';
                    document.getElementById('humidity').textContent = data.main.humidity + '%';
                    document.getElementById('pressure').textContent = data.main.pressure*0.75 + " мм.рт.с.";
                    localStorage.setItem('data', JSON.stringify(data));
                });
        });


    }


})