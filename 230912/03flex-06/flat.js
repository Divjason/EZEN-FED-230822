jQuery(function ($) {
  $(".menu_toggle_btn").click(function () {
    $(".gnb").stop().slideToggle("fast");
  });
});
