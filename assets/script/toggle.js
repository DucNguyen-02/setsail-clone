const mapMenu = document.querySelector('.map-menu')
const map = document.querySelector('.map')
const mapClose = document.querySelector('.map_exit')
mapMenu.onclick = function () {
    map.classList.add('active')
}
mapClose.onclick = function () {
    map.classList.remove('active')
}

const searchBtn = document.querySelector('.searchBtn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-exit')
const modalContainer = document.querySelector('.modal-container')

searchBtn.onclick = function () {
    modal.classList.add('active')
}
closeBtn.onclick = function () {
    modal.classList.remove('active')
}
modal.onclick = function () {
    modal.classList.remove('active')
}
modalContainer.onclick = function (e) {
    e.stopPropagation()
}

const heading = document.querySelector('.header')

if (width > 740)
    document.onscroll = function () {
        if (window.scrollY >= 3300) count()
        if (window.scrollY >= 600) map.classList.remove('active')
        if (window.scrollY === 0) {
            heading.style.display = 'flex'
        } else if (window.scrollY <= 800) {
            heading.style.display = 'none'
        } else {
            heading.style.display = 'flex'
        }
    }

if (width < 739) {
    document.onscroll = function () {
        if (window.scrollY >= 3300) count()
    }
}
