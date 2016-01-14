$('.topnav li a, .scroll-link').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: 0});
    return false;
});


$(".btn-modal").fancybox({
    'padding' : 0
});

$(".btn-modal-photo").fancybox({
    'padding'   : 0,
    'scrolling' : 'no',
    'tpl'       : {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner wedding-inner"></div></div></div></div>'
    }
});

$(function() {

    var value = 0;
    var slide = 1;
    var res;


    $('.portfolio-nav.next').click(function() {
        if (slide != 3) {
            slide = slide + 1;
            value = value - 1120;
        }

        else {
            slide = 1;
            value = 0;
        }
        res = value + 'px';
        $('.portfolio-inner').animate({"left": res})
    });

    $('.portfolio-nav.prev').click(function() {
        if (slide != 1) {
            slide = slide - 1;
            value = value + 1120;
        }
        else {
            slide = 3;
            value = -2240
        }
        res = value + 'px';
        $('.portfolio-inner').animate({"left": res})
    });


});


/*

$('.review-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

*/

$(".review-slider").owlCarousel({
    navigation : false,
    singleItem : true,
    pagination : true
});



$(document).ready(function(){
    $(".review-text").mCustomScrollbar();
});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.9476,30.2670],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([59.9476,30.2670], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [36, 52],
        iconImageOffset: [-18, -52]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}


$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('.video-inner').hide();
        $('.portfolio-play video').hide();
        console.log('tab');


    } else {
        console.log('pc');
        $('.portfolio-play img').hide();
    }

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =    $('input[name="name"]', $form).val(),
                phone   =    $('input[name="phone"]', $form).val(),
                email   =    $('input[name="email"]', $form).val(),
                message =    $('textarea[name="message"]', $form).val();
            console.log(name, phone, email, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email, message: message}
            }).done(function(msg) {
                console.log(name, phone, email, message);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox(
                    '<div class="done">'+ '<span class="done-title">Спасибо, Ваша заявка принята!</span><br/>В скором времени с вами свяжутся наши менеджеры' +'</div>',
                    {
                        'autoDimensions'  : false,
                        'padding': 0,
                        'minWidth': 600,
                        'transitionIn'    : 'none',
                        'transitionOut'   : 'none'
                    }
                );
                setTimeout("$.fancybox.close()", 3000);
            });
        }

        var h = $(window).height();
    });

});