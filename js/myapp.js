$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
    });
});