$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2500,

        dots: true,
    });

    $('.main_visual_slide').on('afterChange', function () {
        const current = $('.main_visual_slide .slick-active')
        current.addClass('on').siblings().removeClass('on')
    })


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });









});



$(function () {
    $('.main_content_slide').slick({
        arrows: false,
        slidesToShow: 4,
    });

    let current = 0;

    $('.main_content_slide').on('afterChange', function (e, s, c) {
        $('.main_content').css({
            backgroundImage: `url(./images/${c + 1}.jpg)`
        });

    });

    $('.main_content .main_content_slide .itm').on('mouseenter', function () {
        let idx = $(this).data('num');

        console.log(idx)
        $('.main_content').css({
            backgroundImage: `url(./images/${idx}.jpg)`
        })
    });


    $('.main_content .arrows .prev').on('click', function () {
        $('.main_content_slide').slick('slickPrev')
    });
    $('.main_content .arrows .Next').on('click', function () {
        $('.main_content_slide').slick('slickNext')
    });

});