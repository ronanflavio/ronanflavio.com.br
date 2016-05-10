jQuery(function ($) {

    $('.scrollbox').customscroll({
        show: {
            on: 'mouseenter',
            effect: 'show',
            speed: 0
        },
        hide: {
            on: 'mouseleave',
            effect: 'hide',
            speed: 0,
            delay: 0
        }
    });

});
