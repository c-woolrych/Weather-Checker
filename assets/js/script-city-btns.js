var cityHistory = $('#history');
var searchBtnEl = $('#search-button');
var cityInput = $('#search-input')
var cityArr = [];

//event listener for search button
searchBtnEl.on('click', function(event) {
    event.preventDefault();
    var city = cityInput.val().trim();
    cityArr.push(city);
    localStorage.setItem('cityInput', (cityArr));
    renderButtons();

})

// creates buttons of cities
function renderButtons() {
        var city = $('#search-input').val().trim();
        var btn = $('<button>');
        btn.text(city);
        btn.addClass('btn');
        btn.addClass('btn-primary');
        cityHistory.append(btn);

}
console.log(cityArr);
localStorage.setItem('cityArr', (cityArr));


window.addEventListener('load', function(event) {
    // event.preventDefault();
    localStorage.getItem('cityArr');
    for (let i = 0; i < cityArr.length; i++) {
        var btn = $('<button>');
        btn.attr('value', cityArr[i]);
        btn.addClass('btn');
        btn.addClass('btn-primary');
        cityHistory.append(btn);
        renderButtons();
    }
});