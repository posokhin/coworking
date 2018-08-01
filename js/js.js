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