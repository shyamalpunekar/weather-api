$(document).ready(function() {
  $('#weatherLocation').click(function(){
    makeApiCall(updateOnSuccess);

    function updateOnSuccess() {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    }  

    let city = $('location').val();
    $('#location').val("");
    $.ajax({
     url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72ecbcc74371583fb0a44ed877a24662`,
     type: 'GET',
     data: {
       format: 'json'
     },
     success: function(response) {
       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
     },
     error: function() {
       $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
