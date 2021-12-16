$(function () {
    'use strict';

    // review slider

    $('.review_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
    });

    // venobox

    $('.venobox').venobox();

    // back to top

    // $('.button_scroll').click(function () {
    //     $('html,body').animate({
    //         scrollTop: 0,
    //     }, 2000);
    // });

    // $(window).scroll(function () {
    //     var buttonscroll = $(this).scrollTop();

    //     if (buttonscroll > 150) {
    //         $('.button_scroll').fadeIn();
    //     } else {
    //         $('.button_scroll').fadeOut();
    //     }
    // });

});