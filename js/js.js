var btn = $('.fas');
var menu = $('.sidebar__menu');

$(btn).click(function(){
    $(menu).slideToggle('sidebar_menu');
})