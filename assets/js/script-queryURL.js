$('#search-button').on('click', function() {
    var cityName = $('#search-input').val().trim();
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=c602c0a5fb4280978dadc46ab1369f6a';
    
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var results = results.data;
        });
    })


