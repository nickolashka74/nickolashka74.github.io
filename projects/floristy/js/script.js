$(document).ready(function() {

    $('.hamburger').click(function(event) {
        $('.menu, .header, .hamburger, .main__socials').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.catalog__list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });

    $('.image__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        asNavFor: '.thumbnail__slider',
        fade: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    fade: true,
                    infinite: false,
                }
            }
        ]
    });

    $('.thumbnail__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        asNavFor: '.image__slider',
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 4,
                    focusOnSelect: true,
                    infinite: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 3,
                    focusOnSelect: true,
                    infinite: false,
                    centerMode: true,
                    centerPadding: '15px',
                }
            }
        ]
    });

    $('.modal__open').click(function() {
        $('.modal').fadeIn();
		return false;
	});	
	
	$('.modal__close').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
	});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__body').length == 0) {
			$(this).fadeOut();					
		}
	});
});
