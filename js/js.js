var btn = $('.burger');
var menu = $('.sidebar__menu');

$(btn).on('click', function () {
    $(menu).slideToggle('sidebar_menu');
})

var scrollbtn = $('.scrollbtn');

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollbtn').fadeIn();
    } else {
        $('.scrollbtn').fadeOut();
    }
})
$('.scrollbtn').on('click', function (e) {
    e.preventDefault();
    $('html , body').animate({
        scrollTop: 0
    } , 800);
})

/*owl carousel*/
$('.feaut__list').owlCarousel({
    loop: true,
    items: 1,
    touchDrag: true,
    responsive: {
        0:{
            items: 1
        },
        768: {
            items: 3
        },


    },
    nav: true,
    onInitialized: function(){
        setTimeout(function(){
            $('.feaut__list').trigger('refresh.owl.carousel')
        } , 1)
    }
})