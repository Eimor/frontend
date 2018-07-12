// Animate Smooth Scroll

$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

// animate back to top bottom 
$(window).scroll(function(){
    if($(window).scrollTop() > 600){
        $("a.back-to-top").fadeIn('fast')
    } else{
        $('a.back-to-top').fadeOut('fast');
    }
})

$('a.back-to-top').on('click',function(){
    $('html, body').animate({
        scrollTop: 0
    }, 900);
})