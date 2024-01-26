// @returns {string} ??

// function buildQueryURL() {
//     var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
//     var queryParams = { 'API-key': 'c602c0a5fb4280978dadc46ab1369f6a'};

//     queryParams.q = $('#search-input').val().trim();

// }

var historyArr = [];
$('#history').append(historyArr);

function renderButtons() {
    for (var i = 0; i < historyArr.length; i++) {
        var btn = $('<button>');
        btn.adddClass('button')
        btn.attr('data-name', historyArr[i]);
        btn.text(historyArr[i]);
        $('#history').append(btn);
    }
}
$('#search-button').on('click', function() {
    // var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=c602c0a5fb4280978dadc46ab1369f6a';
    var city = $('#search-input').val().trim();
    historyArr.push(city);
    renderButtons();

})
renderButtons();
