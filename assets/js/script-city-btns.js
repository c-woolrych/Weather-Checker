var cityHistory = $('#history');
// var searchBtnEl = $('#search-button');
var cityInput = $('#search-input')
var cityArr = JSON.parse(localStorage.getItem('stored')) || [];
var clearHistory = $('#clear-button');

//clear history 
$('#clear-button').on('click', function() {
    cityArr = [];
    localStorage.clear();
    cityHistory.empty();
});

//event listener for search button
searchBtnEl.on('click', function(event) {
    var cityName = cityInput.val().trim();
    console.log(cityName);
    cityArr.push(cityName);
    event.preventDefault();
    localStorage.setItem('stored', JSON.stringify(cityArr));
    renderButtons();
})

// creates buttons of cities
function renderButtons() {
    var city = $('#search-input').val().trim();
    var btn = $('<button>');
    btn.text(city);
    btn.addClass('btn');
    cityHistory.append(btn);
}

// use stored city names to render buttons with
var stored = JSON.parse(localStorage.getItem('stored'));
function getStored() {

    for (let i = 0; i < stored.length; i++) {
        var cityBtn = $('<button>').addClass('list-group-item btn m-1').text(stored[i]).attr('style', 'background: lightgray');
        cityHistory.append(cityBtn);
        // console.log(stored);

        // when city buttons clicked the current weather and forecsat is brought back up
        cityBtn.on('click', function(event) {
            forecastCard.remove();  // remove function goes here ????
            
            var cityName = event.target.textContent;
            // console.log(cityName);
            currentWeather(cityName);
            forecast(cityName);
        })
    }
}
getStored()
