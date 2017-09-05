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
// });


$.ajax({
    url : 'http://api.openweathermap.org/data/2.5/forecast?id=3028641&APPID=6785cd546578eff50319fa79ce8aaa05&units=metric',
    success: function(data){
        console.log(data);
        $('#test').html("jour 1 : Ville : " + data.city.name + '<br>Pays :  ' + data.city.country + '<br>Id Ville :  ' + data.city.id + '<br>Température ' + data.list[0].main.temp + '<br>Date :  ' + data.list[0].dt_txt+'<br>');
        $('#test').append("jour 2 : Ville : " + data.city.name + '<br>Pays :  ' + data.city.country + '<br>Id Ville :  ' + data.city.id + '<br>Température ' + data.list[5].main.temp + '<br>Date :  ' + data.list[5].dt_txt+'<br>');
        $('#test').append("jour 3 : Ville : " + data.city.name + '<br>Pays :  ' + data.city.country + '<br>Id Ville :  ' + data.city.id + '<br>Température ' + data.list[10].main.temp + '<br>Date :  ' + data.list[15].dt_txt+'<br>');
    }
})