$(".title").click(function () {
  $(this).toggleClass("active");
  $(this).next().toggleClass("active");
  let dataImage = $(this).attr("data-image");
  $(".image img").attr("src", dataImage);
});
