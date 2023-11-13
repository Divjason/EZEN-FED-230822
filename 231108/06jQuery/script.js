// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px solid #f00",
//   };
//   $(".txt3").prevUntil(".title").css(style_1);
//   $(".txt3").nextUntil(".txt6").css(style_1);
// });

$(function () {
  $(".txt1").parents().css({
    border: "2px solid  #f00",
  });
  $(".txt2").parents("div").css({
    color: "#f00",
  });
});
