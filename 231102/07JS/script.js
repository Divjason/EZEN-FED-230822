let url = "https://reqres.in/api/products/10";
let result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open("get", url, true);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>출시년도 : ${product.data.year}년</p>
    `;
  }
};
