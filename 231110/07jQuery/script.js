$(function () {
  $("#inner_1").find(".txt1").css({
    background: "#ff0",
  });
  $("#inner_1 p").filter(".txt2").css({
    background: "#0ff",
  });
  $("#inner_2 p")
    .filter(function (i, o) {
      console.log(i);
      console.log(o);
      return i % 2 == 0;
    })
    .css({
      background: "#0ff",
    });
});
