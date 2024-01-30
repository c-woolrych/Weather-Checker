var cityHistory = $('#history');
var searchBtnEl = $('#search-button');
var cityInput = $('#search-input')
var cityArr = [];

//event listener for search button
searchBtnEl.on('click', function(event) {
    event.preventDefault();
    var city = cityInput.val().trim();
    cityArr.push(city);
    localStorage.setItem('stored', (cityArr));
    renderButtons();
})

var stored = localStorage.getItem('stored', (cityArr));
function getStored() {

    for (let i = 0; i < stored.length; i++) {
        var cityBtn = $('<button>').attr('class', 'list-group-item').text(stored);
        cityHistory.append(cityBtn);
        console.log(stored);
    }
}
getStored()
// creates buttons of cities
function renderButtons() {
        var city = $('#search-input').val().trim();
        var btn = $('<button>');
        btn.text(city);
        btn.addClass('btn');
        btn.addClass('btn-primary');
        cityHistory.append(btn);

}