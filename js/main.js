
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