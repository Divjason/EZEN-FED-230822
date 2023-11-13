// $(function () {
//   $("#list_1").parent().css("border", "2px dashed #f00");
//   $("#wrap > li").css("color", "#f00");
// });
// $(function () {
//   $("#wrap > h1").css("border", "2px dashed #f00");
//   $("#wrap > section").children().css({
//     background: "yellow",
//     border: "2px solid #f00",
//   });
// });

// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px, solid #f00",
//   };
//   let style_2 = {
//     background: "#ff0",
//     border: "2px, dashed #f00",
//   };
//   $(".txt").prev().css(style_1);
//   $(".txt + p").css(style_2);
//   $(".txt").next().next().css(style_1);
// });

$(function () {
  let style_1 = {
    background: "#0ff",
    border: "2px, solid #f00",
  };
  let style_2 = {
    background: "#ff0",
    border: "2px, dashed #f00",
  };
  // $(".txt").prevAll().css(style_1);
  // $(".txt").nextAll().css(style_2);
  $(".txt").siblings().css(style_1);
});
