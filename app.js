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
        for (var i = 1; i < 8; ++i) {
            $('#icone').append('<td class="bord fond'+i+'"><img alt="'+data.list[i].weather[0].description+'" src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"></td>');
            $('#temp').append('<td class="bord fond'+i+'">'+ Math.floor(data.list[i].main.temp) + '°C</td>');
            $('#date').append('<td class="bord fond'+i+'">'+ data.list[i].dt_txt + '</td>');
            $('#ville').append('<td class="bord fond'+i+'">'+ data.city.name + '</td>');
            //<tr><td>" + data.city.name + '</td><td>' + data.city.country + '</td><td>' +  + '</td><td>' + Math.floor(data.list[i].main.temp) + '°C</td><td></td></tr>');
        }
    }
})