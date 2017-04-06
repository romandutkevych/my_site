$(function(){
    
    var width = $('#container').width();
    var sliderTimer;
    
    $('.slaider >li').width(width);
    $('.slaider').width(width*('.slaider >li').length);
    
    //position
    
    $('.slaider').css('left',-width);
    $('.slaider>li:last-child').prependTo('.slaider');
    
    //move
    
    function nextSlide(){
        $('.slaider').animate({
            'margin-left':-width
        },800,function(){
            $('.slaider>li:first-child').appendTo('.slaider');
            $('.slaider').css('margin-left',0)
        });
    }
    
    //move back
    
     function prevSlide(){
        $('.slaider').animate({
            'margin-left':width
        },800,function(){
            $('.slaider>li:last-child').prependTo('.slaider');
            $('.slaider').css('margin-left',0)
        });
    }
    
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
    
    //stop when i want click prv
    
    $('.prev').click(function(){
        clearInterval(sliderTimer);
    });
    
    $(function(){
        sliderTimer=setInterval(nextSlide,5000);
        $('#container').hover(function(){
            clearInterval(sliderTimer);
        },function(){
        sliderTimer=setInterval(nextSlide,5000);
        });
    }); 
 
   
});