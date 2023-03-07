let rating = 0;

//Função que monitora o click sobre os ratings
$('#rating div').on('click', function() {
    if(!$(this).hasClass('active')){
        $('#rating div').removeClass('active');
        $(this).addClass('active');
        
        rating = $(this).children('span:first-child').text();
    }
})

//Função que monitora o click sobre o botão submit
$('#submit').on('click', function(){
    if(rating == 0){
        alert('Selecione uma nota');
    }
})