$(document).ready(function(){
    $('.slider-1').owlCarousel({
        loop:true,
        dots:false,
        animateOut:'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });

    var owl=$(".slider-1");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".promo__next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".promo__prev").click(function(){
		owl.trigger("prev.owl.carousel");
    });
    
    $('.slider-2').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:32,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            577:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $('.slider-3').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:32,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            577:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('.slider-4').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:26,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            901:{
                items:2,
                dots:false,
                nav:true
            }
        }
    });

    //Search place

    const iconSearch = document.querySelector('.header__search');
    const body = document.querySelector('body');

    iconSearch.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.add('header__search--active');
    })

    body.addEventListener('click', function(event) {
        iconSearch.classList.remove('header__search--active');
    })

    //Hamburger

    
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu > li'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

  });