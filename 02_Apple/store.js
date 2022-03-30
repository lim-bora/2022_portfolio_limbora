  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(window).resize(function(){
    swiper.update();
  });


  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });