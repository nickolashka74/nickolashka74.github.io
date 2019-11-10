$(document).ready(function(){

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});