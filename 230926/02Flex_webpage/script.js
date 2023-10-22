$(function () {
  // Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  // Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $(".gnb a").click(function () {
    $(".gnb, .trigger").removeClass("active");
  });

  // Slick.JS
  $(".myslider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
