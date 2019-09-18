import $ from 'jquery';
import WOW from 'wow.js/dist/wow.js';
import Typed from 'typed.js';


$(document).ready(function() {

    new WOW().init();

    const $burger = $('#burger');
    const $nav = $('#nav');
    const $header = $('#header');
    const $scrollDown = $('#scroll-down');
    const $scrollTop = $('#scroll-top');
    const $subtitle = $('.subtitle');


    // main text animation
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 80
      });

    
    // add header background-color
    function addHeaderBackground() {
        const scrollValue = $(document).scrollTop();
        const headerHeight = $header.innerHeight();
        
        if(scrollValue > headerHeight) {
            $header.addClass('background');
        } else {
            $header.removeClass('background');
        }
    }


    // burger click
    $burger.on('click', function(event) {
        event.preventDefault();

        $burger.toggleClass('active');
        $nav.toggleClass('active');
        
        if($(this).hasClass('active')) {
            $header.addClass('background');

        } else {
            addHeaderBackground();
        }
    });


    // scrollDown click
    $scrollDown.on('click', function(event) {
        event.preventDefault();

        const windowHeight = $(window).innerHeight();
        const documentScroll = $(document).scrollTop();

        $('html').animate({
			scrollTop: windowHeight
		}, 500);
    })


    // scrollTop click
    $scrollTop.on('click', function(event) {
        event.preventDefault();

        $('html').animate({
			scrollTop: 0
		}, 500);
    });


    // document scroll
    $(document).on('scroll', function(event) {
        addHeaderBackground();
        $burger.removeClass('active');
        $nav.removeClass('active');
        animateTitle();
    });


    // animation with scroll
    function animateTitle() {
        const scrollValue = $(document).scrollTop();
        const windowHeight = $(window).innerHeight();

        $($subtitle).each(function(index, item) {
            const offsetTop = $(item).offset().top; 
            
            if((offsetTop >= scrollValue) && (offsetTop < (scrollValue + windowHeight))) {
                
                if($(item).hasClass('wow')) {
                    $(item).removeClass('wow');
                } else {
                    new WOW().init();
                }
            } else {
                $(item).addClass('wow');
            }
        });
    }
    

    // resize handler
    $(window).on('load resize orientationchange', function () {
        $burger.removeClass('active');
        $nav.removeClass('active');
    });

});
