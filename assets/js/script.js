var cityHistory = $('#history');
var cityArr = [];


//event listener for search button
$('#search-button').on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('city', (cityArr));

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
        cityArr.push(city);

}
console.log(cityArr);


window.addEventListener('load', function(event) {
    event.preventDefault();
    for (let i = 0; i < cityArr.length; i++) {
        var btn = $('<button>');
        // btn.text(city);
        btn.attr('value', cityArr[i]);
        btn.addClass('btn');
        btn.addClass('btn-primary');
        cityHistory.append(btn);
    }
    localStorage.getItem('cityHistory');
});