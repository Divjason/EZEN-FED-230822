$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  $("#sec_1 img").attr({
    src: srcVal.replace("1.JPG", "2.JPG"),
    width: 200,
  });
});
