var main = function() {
    $('.email').click(function() {
    $('.email').removeClass('current');
    $('.email-content').hide();

    $(this).addClass('current');
    $(this).children('.email-content').show();

});
$(document).ready(main);