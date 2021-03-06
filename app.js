// $.ajax({
//     url: 'http://192.168.1.12:8000/public/secret.json',
//     type: 'GET',

//     success: function (data) {
//         console.log(data);
//         $('#test').html("Gg " + data.secret);
//     },

//     error: function () {
//         $('#test').html("YOU FAILED");
//     }
// });


// $('#button').click(function () {
//     $('#test').append("<br>Veuillez patienter"),
//         $.ajax({
//             url: 'http://192.168.1.12:8000/users',
//             type: 'POST',
//             data: { name: 'tiraboschi', content: "Je suis comme Valentin... 06..." },
//             success: function (data) {
//                 $.ajax({
//                     url: 'http://192.168.1.12:8000/users',
//                     type: 'GET',
//                     data: { name: 'tiraboschi' },
//                     success: function (data) {
//                         $('#test').html(data.name + ' ' + data.content);
//                     },
//                     error: function () {
//                         $('#test').html("PAS COOL");
//                     }
//                 })
//             },

//             error: function () {
//                 $('#test').append('OUPS');
//             }
//         });
//});

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?id=3028641&APPID=6785cd546578eff50319fa79ce8aaa05&units=metric',
    success: function (data) {
        console.log(data);
        var windDirection;
        for (var i = 0; i < 8; i = i + 2) {
            if(data.list[i].wind.deg < 22.5 && data.list[i].wind.deg >= 337.5){
                windDirection = "Nord";
            } if(data.list[i].wind.deg < 67.5 && data.list[i].wind.deg >= 22.5){
                windDirection = "Nord-Est";
            } if(data.list[i].wind.deg < 112.5 && data.list[i].wind.deg >= 67.5){
                windDirection = "Est";
            } if(data.list[i].wind.deg < 157.5 && data.list[i].wind.deg >= 112.5){
                windDirection = "Sud-Est";
            } if(data.list[i].wind.deg < 202.5 && data.list[i].wind.deg >= 157.5){
                windDirection = "Sud";
            } if(data.list[i].wind.deg < 247.5 && data.list[i].wind.deg >= 202.5){
                windDirection = "Sud-Ouest";
            } if(data.list[i].wind.deg < 292.5 && data.list[i].wind.deg >= 247.5){
                windDirection = "Ouest";
            } if(data.list[i].wind.deg < 337.5 && data.list[i].wind.deg >= 292.5){
                windDirection = "Nord-Ouest";
            }
            $('#icone').append('<td class="bord"><img alt="'+data.list[i].weather[0].description+'" src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"></td>');
            $('#temp').append('<td class="bord"><strong>'+ Math.floor(data.list[i].main.temp) + '°C</strong></td>');
            $('#date').append('<td class="bord">'+ data.list[i].dt_txt + '</td>');
            $('#ville').append('<td class="bord"><strong>'+ data.city.name + '</strong></td>');
            $('#wind').append('<td class="bord">Vent : '+ Math.floor(data.list[i].wind.speed * 3.6) + ' km/h <br>Direction :  ' + windDirection + '</td>')
            //<tr><td>" + data.city.name + '</td><td>' + data.city.country + '</td><td>' +  + '</td><td>' + Math.floor(data.list[i].main.temp) + '°C</td><td></td></tr>');
        }
    }
})

$('#searchGo').click(function (){
    var villeSearch = $('#search').val();
    $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+villeSearch+'&APPID=6785cd546578eff50319fa79ce8aaa05&units=metric',
    success: function (data) {
        console.log(data);
        var windDirection;
            if(data.wind.deg < 22.5 && data.wind.deg >= 337.5){
                windDirection = "Nord";
            } if(data.wind.deg < 67.5 && data.wind.deg >= 22.5){
                windDirection = "Nord-Est";
            } if(data.wind.deg < 112.5 && data.wind.deg >= 67.5){
                windDirection = "Est";
            } if(data.wind.deg < 157.5 && data.wind.deg >= 112.5){
                windDirection = "Sud-Est";
            } if(data.wind.deg < 202.5 && data.wind.deg >= 157.5){
                windDirection = "Sud";
            } if(data.wind.deg < 247.5 && data.wind.deg >= 202.5){
                windDirection = "Sud-Ouest";
            } if(data.wind.deg < 292.5 && data.wind.deg >= 247.5){
                windDirection = "Ouest";
            } if(data.wind.deg < 337.5 && data.wind.deg >= 292.5){
                windDirection = "Nord-Ouest";
            }
            $('#icone2').html('<td class="bord"><img alt="'+data.weather[0].description+'" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></td>');
            $('#temp2').html('<td class="bord"><strong>'+ Math.floor(data.main.temp) + '°C</strong></td>');
            $('#ville2').html('<td class="bord"><strong>'+ data.name + '</strong></td>');
            $('#wind2').html('<td class="bord">Vent : '+ Math.floor(data.wind.speed * 3.6) + ' km/h <br>Direction :  ' + windDirection + '</td>')
            //<tr><td>" + data.city.name + '</td><td>' + data.city.country + '</td><td>' +  + '</td><td>' + Math.floor(data.list[i].main.temp) + '°C</td><td></td></tr>');
        }
    })
})