let color = ["white", "yellow", "aqua", "purple"];

let i = 0;
function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }
  let bodyTag = document.querySelector("#thebody");
  bodyTag.style.background = color[i];
}
