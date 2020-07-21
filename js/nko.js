'use strict'

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    watchOverflow: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
ReactDOM.render(<QAs />, document.getElementById('answers'))
ReactDOM.render(helpboard, document.getElementById('board'))