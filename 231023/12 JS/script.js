/*
let tsNode = document.createElement("p");
let tsTextNode = document.createTextNode("Typescript");
tsNode.appendChild(tsTextNode);

let basisNode = document.querySelectorAll("p")[2];
document.body.insertBefore(tsNode, basisNode);
*/

/*
let heading = document.querySelector("h1");
heading.remove();
*/

/*
const title = document.querySelector("h1");
title.addEventListener("click", () => {
  title.remove();
});
*/

/*
let parent = document.querySelector("h1").parentNode;
console.log(parent);
*/

const items = document.querySelectorAll("li");
for (item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
