const width = window.innerWidth > 0 ? window.innerWidth : screen.width
var heroShow = 0
var reviewShow = 0
var teamShow = 0
if (width < 740) {
    heroShow = 1
    reviewShow = 1
    teamShow = 1
} else {
    heroShow = 4
    reviewShow = 3
    teamShow = 4
}

$('.hero-list').slick({
    dots: true,
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    customPaging: function (slider, i) {
        return '<span class="dot"></span>'
    },

    slidesToShow: heroShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.review-list').slick({
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    slidesToShow: reviewShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.team-list').slick({
    nextArrow: 'none',
    prevArrow: 'none',
    infinite: true,
    slidesToShow: teamShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})
