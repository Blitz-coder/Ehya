$(document).ready(function () {

  var menuButton = document.querySelector(".navbar__menu-burger");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar__mobile").classList.toggle("navbar__mobile--visible");
  });

  var menuButton = document.querySelector(".navbar__menu-burger--close");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar__mobile").classList.toggle("navbar__mobile--visible");
    console.log("клик по бургеру");
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    autoplay: {
      delay: 7000,
    },
    loop: true,
    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  var historySlider = new Swiper('.history-slider', {
    loopedSlides: 0,
    loop: false,
    // slidesPerView: 0,
    spaceBetween: 0,
    // slidesPerGroup: 0,
    // slidesPerGroupSkip: 1,
    slidesPerColumn: 2,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 576px
      576: {
        loopedSlides: 2,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.history-arrows__next',
      prevEl: '.history-arrows__prev',
    },
  });



});