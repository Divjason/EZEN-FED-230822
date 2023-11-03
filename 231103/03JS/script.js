const order = new Promise((resolve, reject) => {
  let coffee = prompt("어떤 커피를 주문하시겠습니까?");
  if (coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee} 주문접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

let display = (result) => {
  document.querySelector(".end").innerText = `${result} 준비완료🥃`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
};

let showErr = (err) => {
  document.querySelector(".start").innerText = err;
};

order.then(display).catch(showErr);
