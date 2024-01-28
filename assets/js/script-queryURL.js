$('#search-button').on('click', function() {
    var cityName = $('#search-input').val().trim();
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=c602c0a5fb4280978dadc46ab1369f6a';
    
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
    // todayEl.empty();

                var todayEl = $('#today');
                todayEl.append(cardTitleEl);
                todayEl.append(cardTextEl);

                var cardTitleEl = $('#card-title');
                var cardTextEl = $('#card-text');

                var cityName = data.name;
                var temp = data.main.temp;
                var wind = data.wind.speed;
                var humid = data.main.humidity;
                var cityNameP = cardTitleEl.text(cityName);
                var tempP = $('#card-text-temp').text('Temperature: ' + temp + 'C');
                var windP = $('#card-text-wind').text('Wind: ' + wind + 'KPH');
                var humidP = $('#card-text-humid').text('Humidity: ' + humid + '%');
                cardTitleEl.append(cityNameP);
                cardTextEl.append(tempP);
                cardTextEl.append(windP);
                cardTextEl.append(humidP);
        });
    })


