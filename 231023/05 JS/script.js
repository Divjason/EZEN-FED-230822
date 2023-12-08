// window.onload = alert("안녕하세요!");

// const button = document.querySelector("button");
// button.onclick = () => {
//   document.body.style.background = "green";
// };

const result = document.querySelector("#result");
document.body.addEventListener("keyup", (e) => {
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
