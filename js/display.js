$(function(){
 
    $(document).ready(function(){
        setTimeout(function(){
            $('.next').fadeIn(); 
        }, 2500);
    });

    $('.next').click(function(){
        $('#introbg').addClass('up');
        $('.phone').addClass('up');
        $('#buttons').css('display','block');
    });

});