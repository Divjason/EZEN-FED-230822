$(function () {
  let result_1 = $("#inner_1 p").eq(0).is(":visible");
  console.log(result_1);

  let result_2 = $("#inner_1 p").eq(1).is(":visible");
  console.log(result_2);

  let result_3 = $("#chk1").is(":checked");
  console.log(result_3);

  let result_4 = $("#chk2").is(":checked");
  console.log(result_4);
});
