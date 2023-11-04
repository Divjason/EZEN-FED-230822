const elements = document.querySelectorAll("*");
// console.log(elements);

for (let element of elements) {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
}

// 이벤트 버블링 (*가장 아래 위치한 요소부터 가장 최상단 위치한 요소까지 이벤트가 전파되는 형태)
// 이벤트 캡처링 (*가장 위에 위치한 요소부터 가장 아래 위차한 요소까지 이벤트가 전파되는 형태)
