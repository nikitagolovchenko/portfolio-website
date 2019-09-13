import $ from 'jquery';
import SayHello from './components/sayhello';


$(document).ready(function() {

    const $burger = $('#burger');
    const $nav = $('#nav');
    const $header = $('#header');
    const $scrollDown = $('#scroll-down');
    
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

        $('html, body').animate({
			scrollTop: windowHeight
		}, 500);


    })

    // document scroll
    $(document).on('scroll', function(event) {
        addHeaderBackground();
        $burger.removeClass('active');
        $nav.removeClass('active');
    });
    
    // resize handler
    $(window).on('load resize orientationchange', function () {
        $burger.removeClass('active');
        $nav.removeClass('active');
    });

});
