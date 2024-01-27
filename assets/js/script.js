// @returns {string} ??

// function buildQueryURL() {
//     var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
//     var queryParams = { 'API-key': 'c602c0a5fb4280978dadc46ab1369f6a'};

//     queryParams.q = $('#search-input').val().trim();

// }



$('#search-button').on('click', function(event) {
    event.preventDefault();
    var city = $('#search-input').val().trim();
    renderButtons(city);
    
})

function renderButtons(city) {
        var btn = $('<button>');
        btn.addClass('btn');
        btn.text(city);
        $('#history').append(btn);
}
