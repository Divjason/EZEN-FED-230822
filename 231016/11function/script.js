// let num = 1;
// function gallery(direct) {
//   if (direct) {
//     if (num === 8) return;
//     num++;
//   } else {
//     if (num === 1) return;
//     num--;
//   }
// }
// let imgTag = document.querySelector("#photo");
// imgTag.setAttribute("src", `../img/2/pic_${num}.jpg`);
let num = 1;
function gallery(direct) {
  if (direct) {
    if (num == 8) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }

  let imgTag = document.querySelector("#photo");
  imgTag.setAttribute("src", "../img/2/pic_" + num + ".jpg");
}
