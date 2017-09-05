$.ajax({
    url: 'http://192.168.1.12:8000/public/secret.json',
    type: 'GET',

    success: function (data) {
        console.log(data);
        $('#test').html("Gg " + data.secret);
    },

    error: function () {
        $('#test').html("YOU FAILED");
    }
});


$('#button').click(function(){
    $('#test').append("<br>Veuillez patienter"),
    $.ajax({
    url : 'http://192.168.1.12:8000/users',
    type : 'POST',
    data : { name : 'tiraboschi', content : "Je suis comme Valentin... 06..." },
    success: function(data){
        $.ajax({
            url: 'http://192.168.1.12:8000/users',
            type : 'GET',
            data : {name : 'tiraboschi'},
            success: function(data){
                $('#test').html(data.name + ' ' + data.content);
            },
            error: function(){
                $('#test').html("PAS COOL");
            }
        })
    },

    error : function(){
        $('#test').append('OUPS');
    }});
});