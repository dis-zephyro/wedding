$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: -100});
    return false;
});


$(".btn-modal").fancybox({
    'padding' : 0
});


$('.portfolio').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.portfolio-nav.prev').click(function(){
    $('.portfolio').slick('slickPrev');
});
$('.portfolio-nav.next').click(function(){
    $('.portfolio').slick('slickNext');
});


$('.wedding-thumbs li').click(function (event) {
    event.preventDefault();
    var arr = $(this).attr("data-target");
    var box = $(this).closest('.wedding');

    console.log(arr);
    console.log(box);

    box.find('.wedding-image img').hide();
    box.find(arr).show();
    box.find('.wedding-thumbs li').removeClass('active');
    $(this).addClass('active');
});




$('.review-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
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

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =    $('input[name="name"]', $form).val(),
                phone   =    $('input[name="phone"]', $form).val(),
                message =    $('textarea[name="message"]', $form).val();
            console.log(name, phone, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, message: message}
            }).done(function(msg) {
                console.log(name, phone, message);
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