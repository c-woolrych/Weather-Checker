//attempt at date placeholder

// var todayDate = new Date().toJSON().slice(0, 10);
// var todayEl = $('#today');
// window.addEventListener('load', function() {
//     todayEl.append($('<h3>').text(todayDate));
// });
// $('#search-button').on('click', function(event) {
//     event.preventDefault();
//     todayDate.clear();
// });


// click event to fetch weather data of city searched
$('#search-button').on('click', function(event) {
    var cityName = $('#search-input').val().trim();
    var queryURLcurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=c602c0a5fb4280978dadc46ab1369f6a';
    
    //query for current weather
    fetch(queryURLcurrent)
    .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var date = new Date().toJSON().slice(0, 10);
                var todayEl = $('#today');
                todayEl.append(cardTitleEl);
                todayEl.append(cardTextEl);

                var cardTitleEl = $('#card-title');
                var cardTextEl = $('#card-text');

                var cityName = data.name;
                var icon = data.weather[0].icon;
                var iconURL = $('<img>').attr('src', 'https://openweathermap.org/img/wn/' + icon +'@2x.png');
                var temp = data.main.temp;
                var wind = data.wind.speed;
                var humid = data.main.humidity;
                var cityNameP = cardTitleEl.text(cityName + ' (' + date + ')');
                var tempP = $('#card-text-temp').text('Temperature: ' + temp + ' C');
                var windP = $('#card-text-wind').text('Wind: ' + wind + ' KPH');
                var humidP = $('#card-text-humid').text('Humidity: ' + humid + '%');
                cardTitleEl.append(cityNameP);
                cardTitleEl.append(iconURL);
                cardTextEl.append(tempP);
                cardTextEl.append(windP);
                cardTextEl.append(humidP);
        });

        //query for 5 day forecast
    var queryURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=c602c0a5fb4280978dadc46ab1369f6a&units=metric'

    fetch(queryURLforecast)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            
            for (var i = 0; i < data.list.length -1; i++) {
                var time = data.list[i].dt_txt;
                var forecastSection = $('#forecast');
                var dayDiv = $('#day');
                forecastSection.append(dayDiv);

                if (time.includes('09:00:00')) {
                    var iconURL = $('<img>').attr('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png');
                    // console.log(data.list[i].weather[0].icon);
                    var date = data.list[i].dt_txt.slice(0, 10);
                    var temp = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humid = data.list[i].main.humidity;
                    var dateP = $('<h5>').text(date).addClass('fw-bold');
                    var tempP = $('<p>').text('Temperature: ' + temp + ' C');
                    var windP = $('<p>').text('Wind Speed: ' + wind + ' MPH');
                    var humidP = $('<p>').text('Humidity: ' + humid + '%');
                    
                    dayDiv.append(dateP)
                    .append(iconURL)
                    .append(tempP).append(windP).append(humidP);
                }
            }
            
            
        })
})


