$('.hero-list').slick({
    dots: true,
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    customPaging: function (slider, i) {
        return '<span class="dot"></span>'
    },
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.review-list').slick({
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.team-list').slick({
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})
