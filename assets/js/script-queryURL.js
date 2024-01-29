// console.log(date);

$('#search-button').on('click', function() {
    var cityName = $('#search-input').val().trim();
    var queryURLcurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=c602c0a5fb4280978dadc46ab1369f6a';
    
    
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
                var temp = data.main.temp;
                var wind = data.wind.speed;
                var humid = data.main.humidity;
                var cityNameP = cardTitleEl.text(cityName + ' (' + date + ')');
                var tempP = $('#card-text-temp').text('Temperature: ' + temp + ' C');
                var windP = $('#card-text-wind').text('Wind: ' + wind + ' KPH');
                var humidP = $('#card-text-humid').text('Humidity: ' + humid + '%');
                cardTitleEl.append(cityNameP);
                cardTextEl.append(tempP);
                cardTextEl.append(windP);
                cardTextEl.append(humidP);
        });

    var queryURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=c602c0a5fb4280978dadc46ab1369f6a&units=metric'

    fetch(queryURLforecast)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            var forecastEl = $('#forecast');
            forecastEl.append();
            
            
            for (var i = 0; i < data.list.length; i++) {
                var time = data.list[i].dt_txt;
                console.log(data.list[i].dt_txt);
                
                if (time.includes('12:00:00')) {

                }
            }
            

        })
})


