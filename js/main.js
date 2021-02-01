$(document).ready(function () {

  var testimonialSwiper = new Swiper('.testimonial-slider', {
    loop: true,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoHeight: true,

    keyboard: true,

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  var storiesSwiper = new Swiper('.stories-slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,

    navigation: {
      nextEl: '.stories-slider-button--next',
      prevEl: '.stories-slider-button--prev',
      disabledClass: '.stories-slider-button--disabled'
    }
  });

  const storiesPrev = $('.stories-slider-button--prev')
  const storiesNext = $('.stories-slider-button--next')


  $(".stories-slider-button--next").on("click", function () {
    if (storiesSwiper.activeIndex > 0) {
      $(".stories-slider-button--prev").removeClass("stories-slider-button--prev--disabled");
      if (storiesSwiper.activeIndex == 2) {
        $(".stories-slider-button--next").addClass("stories-slider-button--next--disabled");
      };
    };
  });

  $(".stories-slider-button--prev").on("click", function () {
    if (storiesSwiper.activeIndex < 2) {
      $(".stories-slider-button--next").removeClass("stories-slider-button--next--disabled");
      if (storiesSwiper.activeIndex == 0) {
        $(".stories-slider-button--prev").addClass("stories-slider-button--prev--disabled");
      };
    };
  });


  $(".menu-button").on("click", function (event) {
    event.preventDefault();
    $(".navbar").addClass("navbar--visible")
  });

  $(".navbar__close").on("click", function (event) {
    event.preventDefault();
    $(".navbar").removeClass("navbar--visible")
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");

  function openModal(e) {
    e.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    $(".navbar").removeClass("navbar--visible");
  };

  function closeModal(e) {
    e.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  };

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);

  $(document).on("keydown", function (e) {
    27 == e.keyCode && closeModal(e)
  });



  var tabsItem = $('.trending-tabs__item');
  var contentItem = $('.trending-content__item');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('trending-tabs__item--active');
    contentItem.removeClass('trending-content__item--active');
    $(this).addClass('trending-tabs__item--active');
    $('#' + activeContent).addClass('trending-content__item--active');
  });


  var goTopBtn = document.querySelector('.to-top');
  window.addEventListener('scroll', trackScroll);

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('to-top__show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('to-top__show');
    }
  };


  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  $(".subscribe").validate({
    rules: {
      email: {
        required: !0,
        email: !0
      }
    },
    messages: {
      email: {
        required: "Введите ваш Email",
        email: "Например: name@domain.com"
      }
    },
    errorClass: "invalid"
  });

  $(".modal__form").validate({
    rules: {
      email: {
        required: !0,
        // email: !0
      },
      name: {
        required: !0
      },
      phone: {
        required: !0
      }
    },
    messages: {
      email: {
        required: "Введите email",
        email: "Напишите правильно!"
      },
      name: {
        required: "Введите имя",
        minlength: "Слишком короткое имя",
      },
      phone: {
        required: "Введите телефон",
        minlength: "Слишком короткий номер",
      }
    },
    errorClass: "invalid"
  });


  $('input[name="phone"]').mask('+7 (999) 999-99-99');


});