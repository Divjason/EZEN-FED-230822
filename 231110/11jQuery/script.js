$(function () {
  $("#p1").addClass("aqua");
  $("#p2").removeClass("red");
  $("#p3").toggleClass("green");
  $("#p4").toggleClass("green");
  $("#p6").text($("#p5").hasClass("yellow"));
});
