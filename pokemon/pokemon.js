$(document).ready(function () {
    var src = '';
    for (var i = 1; i <= 151; i++) {
        src = 'http://pokeapi.co/media/img/' + i + '.png';
        $('#pokemon').append('<img id="' + i + '" src="' + src + '">');
    }
    $('#pokemon img').on('click', function () {
        var src= 'http://pokeapi.co/media/img/' +$(this).attr('id')+ '.png';
        $.get('https://pokeapi.co/api/v2/pokemon/'+ $(this).attr('id')+'/', function (res) {
            var detail = '<h3>' + res.name + '</h3>';
            detail += '<img src="' + src+ '">';
            detail += '<p>Height:' + res.height + '</p>';
            detail += '<p>Weight:' + res.weight + '</p>';
            detail += '<p>Type:</br>';
            for (var i = 0; i < res.types.length; i++) {
                detail += res.types[i].type.name + '</br>'
            }
            detail += '</p>';
            $('#detail').html(detail);
        }, 'json');
    });
});