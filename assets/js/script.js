// @returns {string} ??

// function buildQueryURL() {
//     var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
//     var queryParams = { 'API-key': 'c602c0a5fb4280978dadc46ab1369f6a'};

//     queryParams.q = $('#search-input').val().trim();

// }

$('search-button').on('click', function() {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=c602c0a5fb4280978dadc46ab1369f6a';

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        then(function (results) {
            var results = results.data;
            console.log('results');
        })
})