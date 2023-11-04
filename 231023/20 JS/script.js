const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");

  let textNode = document.createTextNode(title.innerText);
  let newImg = document.createElement("img");
  let srcNode = document.createAttribute("src");
  srcNode.value = "./nike.JPG";
  newImg.setAttributeNode(srcNode);
  document.body.appendChild(newImg);

  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "#00f";
  orderInfo.appendChild(newP);
});
