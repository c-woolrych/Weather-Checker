var cityHistory = $('#history');
var searchBtnEl = $('#search-button');
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

var stored = JSON.parse(localStorage.getItem('stored'));
function getStored() {

    for (let i = 0; i < stored.length; i++) {
        var cityBtn = $('<button>').addClass('list-group-item btn m-1').text(stored[i]).attr('style', 'background: lightgray');
        cityHistory.append(cityBtn);
        // console.log(stored);

cityBtn.on('click', function(event) {
    var cityName = $(this).text;
    currentWeather(cityName);
    //cityname === the button that was clicked
    // $(this)
    forecast(cityName);
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
