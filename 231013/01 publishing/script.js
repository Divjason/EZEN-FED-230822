$(".testimonial-pic img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".testimonial .content").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
