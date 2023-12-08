function showPrice() {
  let originPrice = document.querySelector("#oPrice").value;
  console.log(originPrice);
  let rate = document.querySelector("#rate").value;
  console.log(rate);
  let savedPrice = originPrice * (rate / 100);
  let resultPrice = originPrice - savedPrice;
  document.querySelector(
    "#showResult"
  ).innerHTML = `상품의 원래 가격은 ${originPrice}원이고, 할인률은 ${rate}% 입니다.
  ${savedPrice}원을 절약한 ${resultPrice}원에 살 수 있습니다.`;
}
