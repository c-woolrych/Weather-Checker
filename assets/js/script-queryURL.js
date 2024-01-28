$('#search-button').on('click', function() {
    var cityName = $('#search-input').val().trim();
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=c602c0a5fb4280978dadc46ab1369f6a';
    
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var results = results.data;

            for (var i = 0; i < results.lengthl; i++) {
                var weatherHrEl = $('.weather-hr');

                var temp = results[i].main.temp.val();
                var wind = results.wind.speed.val();
                var humid = results.main.humidity.val();
                var tempP = $('<p>').text('Temperature: ' + temp + 'C');
                var windP = $('<p>').text('Wind: ' + wind + 'KPH');
                var humidP = $('<p>').text('Humidity: ' + humid + '%');


            }
        });
    })


