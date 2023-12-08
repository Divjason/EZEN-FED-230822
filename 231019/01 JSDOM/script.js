const title = document.querySelector("#title");
const userName = document.querySelector("#desc .userName");
const pfImg = document.querySelector("#profile img");

title.onclick = () => {
  // title.innerText = "프로필";
  // title.style.background = "#000";
  // title.style.color = "#fff";
  // title.classList.remove("clicked");
  // if (!title.classList.contains("clicked")) {
  //   title.classList.add("clicked");
  // } else {
  //   title.classList.remove("clicked");
  // }
  title.classList.toggle("clicked");
};
userName.onclick = () => {
  userName.innerHTML = "이름 : <b>영심이<b>";
  userName.style.color = "#f00";
};
pfImg.onclick = () => (pfImg.src = "../img/2/pf2.png");

// document에서 특정 클래스 값을 가지고 있는 노드를 찾게되었을 때에만 이벤트를 적용하고 싶다!!
