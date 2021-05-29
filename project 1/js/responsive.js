$(document).ready(function(){
    $('.hamburger-icon').click(function(){
        let responsivemenu = $('#responsive-nav');
        responsivemenu.animate({
            right : 0
        },400);
        $('body').append('<div class="back-container"></div>');
        $('.back-container').click(function(){
            responsivemenu.animate({
                right:'-200px'
            },400)
            $('.back-container').remove()
        })
    })
}) 