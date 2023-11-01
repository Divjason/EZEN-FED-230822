window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    // Isotope 함수의 첫번째 매개변수 : 레이아웃을 재배치할 요소를 감싸고 있는 부모요소명 = section
    itemSelector: "article",
    // 실제로 레이아웃을 재배치할 요소명 = article
    columnWidth: "article",
    // 실제로 레이아웃을 재배치할 때, 너비값을 자동으로 정렬시킬 요소 = article
    transitionDuration: "0.5s",
    // 실제로 레이아웃을 재배치할 때, 걸리는 속도(*반응형 만들때)
  });

  const btns = document.querySelectorAll("main ul li");
  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      console.log(sort);
      grid.arrange({
        filter: sort,
      });
      for (let el of btns) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }
});
