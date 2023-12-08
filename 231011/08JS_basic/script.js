let stars = parseInt(prompt("별의 개수 : "));

// if (stars !== null && stars !== "") {
//   while (stars > 0) {
//     document.write("*");
//     stars--;
//   }
// }

if (stars !== null && stars !== "") {
  do {
    document.write("*");
    stars--;
  } while (stars > 0);
}
