const api_key
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://weatherapi-com.p.rapidapi.com/current.json?q=",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": api_key
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
    $("#weather").append(response.location.name);
    $("#weather").append(response.location.region);
    $("#weather").append(response.current.temp_c);

});

