const today = new Date();
const hrs = today.getHours();
const container = document.querySelector("#container");
let newImg = document.createElement("img");
newImg.src = hrs < 12 ? "img/2/morning.jpg" : "img/2/afternoon.jpg";
container.appendChild(newImg);
