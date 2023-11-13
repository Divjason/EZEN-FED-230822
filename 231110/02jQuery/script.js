$(function () {
  let arr1 = [
    { area: "서울", name: "park" },
    { area: "부산", name: "kim" },
    { area: "대전", name: "lee" },
    { area: "서울", name: "choi" },
  ];

  let arr2 = $.map(arr1, function (a, b) {
    if (a.area == "서울") {
      return a;
    }
  });
  console.log(arr2);

  let arr3 = $.grep(arr1, function (a, b) {
    if (a.area == "서울") {
      return true;
    } else {
      return false;
    }
  });
  console.log(arr3);
});
