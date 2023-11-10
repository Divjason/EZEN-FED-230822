$(function () {
  let arr1 = ["서울", "대전", "부산", "청주"];
  let arr2 = ["한국", "미국", "일본", "중국"];
  let obj = {
    name: "park",
    area: "서울",
  };

  let idxNum = $.inArray("부산", arr1);
  console.log(idxNum);

  let okArray1 = $.isArray(arr1);
  console.log(okArray1);

  let okArray2 = $.isArray(obj);
  console.log(okArray2);

  $.merge(arr1, arr2);
  console.log(arr1);

  let idxNum2 = $("li").index($("#list3"));
  console.log(idxNum2);
});
