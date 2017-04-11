$(function() {

    var width = $('#container').width();
    var sliderTimer;

    $('.slaider >li').width(width);
    $('.slaider').width(width * ('.slaider >li').length);

    //position

    $('.slaider').css('left', -width);
    $('.slaider>li:last-child').prependTo('.slaider');

    //move

    function nextSlide() {
        $('.slaider').animate({
            'margin-left': -width
        }, 800, function() {
            $('.slaider>li:first-child').appendTo('.slaider');
            $('.slaider').css('margin-left', 0)
        });
    }

    //move back

    function prevSlide() {
        $('.slaider').animate({
            'margin-left': width
        }, 800, function() {
            $('.slaider>li:last-child').prependTo('.slaider');
            $('.slaider').css('margin-left', 0)
        });
    }

    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);

    //stop when i want click prv

    $('.prev').click(function() {
        clearInterval(sliderTimer);
    });

    $(function() {
        sliderTimer = setInterval(nextSlide, 5000);
        $('#container').hover(function() {
            clearInterval(sliderTimer);
        }, function() {
            sliderTimer = setInterval(nextSlide, 5000);
        });
    });


});


//form validation



$(function() {

    $('.fr_contact').each(function() {
        var form = $(this),
            btn = form.find('.btn_submit')

        form.find('.form_field').addClass('empty_field');

        // Функция проверки полей формы
        function checkInput() {
            form.find('.form_field').each(function() {
                if ($(this).val() != '') {

                    $(this).removeClass('empty_field');
                }
                else {
                    $(this).addClass('empty_field');
                }
            });
        }

        $('#user_email').blur(function() {
            if ($(this).val() != '') {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (pattern.test($(this).val())) {
                    $(this).css({
                        'border': '1px solid #569b44'
                    });
                    $(this).removeClass('false_field');
                }
                else {
                    $(this).css({
                        'border': '1px solid #ff0000'
                    });
                    $(this).addClass('false_field');
                }
            }
            else {
                $(this).addClass('false_field');
            }
        });


        $('#user_telephone').blur(function() {
            if ($(this).val() != '') {
                var pattern = /[0-9]/;
                if (pattern.test($(this).val())) {
                    $(this).css({
                        'border': '1px solid #569b44'
                    });
                    $(this).removeClass('false_field');
                }
                else {
                    $(this).css({
                        'border': '1px solid #ff0000'
                    });
                    $(this).addClass('false_field');
                }
            }
            else {
                $(this).addClass('false_field');
            }
        });

        // Функция подсветки незаполненных полей
        function lightEmpty() {
            form.find('.empty_field').css({
                'border-color': '#f20000'
            });
            setTimeout(function() {
                form.find('.empty_field').removeAttr('style');
            }, 1000);
        }

        setInterval(function() {
            checkInput();
            var sizeEmpty = form.find('.empty_field').size();
            var sizeFalse = form.find('.false_field').size();
            if ((sizeEmpty > 0) || (sizeFalse > 0)) {

                btn.addClass('disabled');
            }
            else {
                btn.removeClass('disabled');
            }
        }, 500);

        function sendForm() {
            $.ajax({
                url: "https://formspree.io/roma3110@ukr.net",
                method: "POST",
                data: {
                    clientEmail: $('#user_email').val(),
                    clientPhoneNum: $('#user_telephone').val(),
                    clientMessage: $('#message').val()
                },
                dataType: "json"
            });
        }




        btn.click(function() {
            if (btn.hasClass('disabled')) {
                lightEmpty();
                return false;
            }
            else {
                sendForm();
                alert("Дякуємо що повідомили нас");
                $('.form_field').val('').removeAttr('style');
                $('#message').val('');
                return false;
            }
        });

    });

    //smooth-scroll

    $(function() {
        $('.smooth').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1500);
            }
        });
    });



    $(function() {
        var btn_menu = $('.btn_menu');
        menu = $('nav ul');

        $(btn_menu).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle(1500);
        });
    });


});
