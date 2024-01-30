var cityHistory = $('#history');
var searchBtnEl = $('#search-button');
var cityInput = $('#search-input')
var cityArr = [];

var cityName = cityInput.val().trim();
cityArr.push(cityName);

//event listener for search button
searchBtnEl.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('stored', (cityArr));
    renderButtons();
})

var stored = localStorage.getItem('stored', (cityArr));
function getStored() {

    for (let i = 0; i < stored.length; i++) {
        var cityBtn = $('<button>').addClass('list-group-item btn m-1').text(stored).attr('style', 'background: lightgray');
        cityHistory.append(cityBtn);
        console.log(stored);

cityBtn.on('click', function() {
    currentWeather();
    forecast();
})
    }
}
getStored()

// creates buttons of cities
function renderButtons() {
    var city = $('#search-input').val().trim();
    var btn = $('<button>');
    btn.text(city);
    btn.addClass('btn');
    cityHistory.append(btn);
}
