var city = $('#search-input').val().trim();
var cityHistory = [];


$('#search-button').on('click', function(event) {
    event.preventDefault();
    renderButtons();
    localStorage.setItem('cityBtn', JSON.stringify(cityHistory));
    loadButtons();
})

function renderButtons() {
        var btn = $('<button>');
        btn.addClass('btn');
        btn.addClass('btn-primary');
        btn.text(city);
        $('#history').append(btn);
        localStorage.setItem('cityBtn', JSON.stringify(cityHistory));
}
console.log(cities);


window.addEventListener('load', loadButtons);