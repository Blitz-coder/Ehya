$(document).ready(function () {

  var menuButton = document.querySelector(".navbar__menu-burger");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar__mobile").classList.toggle("navbar__mobile--visible");
    console.log("клик по бургеру");
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



});