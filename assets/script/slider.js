var slideIndex = 0
var timeOut
const slides = document.querySelectorAll('.slider-background')
const textTransform = document.querySelectorAll('.slider-text')
const nextBtn = document.querySelector('.slider-btn-right')
const prevBtn = document.querySelector('.slider-btn-left')

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slideIndex++
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    slides[slideIndex].style.display = 'block'
    slides[slideIndex].classList.add('scale')
}
function start() {
    showSlides()
    timeOut = setTimeout(start, 5000)
}

nextBtn.onclick = function () {
    clearTimeout(timeOut)
    showSlides()
    timeOut = setTimeout(start, 5000)
}

prevBtn.onclick = function () {
    clearTimeout(timeOut)
    showSlides()
    timeOut = setTimeout(start, 5000)
}

start()
