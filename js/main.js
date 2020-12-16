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

});