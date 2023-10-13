$(".login button").click(function () {
  let num = $(".login input[type=text]").val();

  if (num == "") {
    alert("나이를 입력하세요");
  } else if (num < 20) {
    alert("미성년자입니다.");
  } else if (num >= 20) {
    alert("성인입니다.");
  } else {
    alert("나이를 숫자로 입력하세요");
  }
});
