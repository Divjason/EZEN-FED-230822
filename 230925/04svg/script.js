$(document).ready(function () {
  let canvas = document.getElementById("canvas");
  let paper = Raphael(canvas, 700, 400);

  let rect = paper.rect(0, 0, 700, 300);
  let circle = paper.circle(350, 150, 100);

  rect.attr("fill", "red");

  circle.attr("fill", "orange");
  circle.attr("stroke", "black");

  circle
    .mouseover(function () {
      circle.attr("fill", "blue");
    })
    .mouseout(function () {
      circle.attr("fill", "orange");
    });
});
