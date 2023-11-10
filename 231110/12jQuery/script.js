$(function () {
  let result_1 = $("#user_name").val();
  console.log(result_1);

  $("#user_id").val("javascript");

  let result_2 = $("#user_id").prop("defaultValue");
  console.log(result_2);
});
