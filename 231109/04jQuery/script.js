$(function () {
  /*
  $("li:first-of-type").css({
    background: "#ff0",
  });
  $("li:last-of-type").css({
    background: "#0ff",
  });
  */
  /*
  $("#menu1 li:nth-child(1)").css({
    background: "#ff0",
  });
  $("#menu1 li:nth-child(2n)").css({
    border: "2px dashed #f00",
  });
  $("#menu2 li:nth-last-child(2)").css({
    background: "#0ff",
  });
  */
  $("#menu1 li").slice(1, 3).css({
    background: "#ff0",
  });
  $("li:only-child").css({
    background: "#0ff",
  });
});
