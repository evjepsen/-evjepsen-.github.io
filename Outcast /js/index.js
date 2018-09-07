$(document).ready(function(){

    $('.produkjonerGemt').hide();

    $('#seMer').on('click', () => {
    	$('.produkjonerGemt').show();
    	$('#seMer').hide();
    });

    $('#seMindre').on('click', () => {
    	$('.produkjonerGemt').hide();
    	$('#seMer').show();
    });

    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

});



