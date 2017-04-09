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


//form validation



	$(function() {

		$('.fr_contact').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit')
			
			form.find('.form_field').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.form_field').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#f20000'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},1000);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					
					btn.addClass('disabled');
				}else{
					btn.removeClass('disabled')
				}
			},500);

			btn.click(function(){
				if(btn.hasClass('disabled')){
					lightEmpty();
					return false;
				} else {
					form.submit();
				}
			});
			
		});
		
	});
