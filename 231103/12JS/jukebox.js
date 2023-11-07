// 1.재생버튼을 클릭했을 때, 음원 재생
// 2.일시정지버튼을 클릭했을 때, 음원 정지
// 3.그렇다면, 재생 & 일시정지 버튼은 어떻게 찾아와야할까?
// albumTable_song DOM 정의
// albumTable_song
// 음원이 1개만 있는것이 아니다, 사용자는 어떤 음원을 선택할지 알 수 없다
// 반복문이 필요하다!!

const songs = document.querySelectorAll(".albumTable_song");
for (let el of songs) {
  let play = el.querySelector(".fa-caret-right");
  let pause = el.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}
