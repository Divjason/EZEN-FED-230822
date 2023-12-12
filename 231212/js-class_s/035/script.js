// URL 내 파라미터 및 쿼리스트링 값을 배열로 찾아오기!!
const locationSearch = window.location.search;
const parameters = locationSearch.split(/\?|&/).filter((value) => {
  return value.includes("=");
});

const hashes = {};

parameters.forEach((parameter) => {
  const parameterList = parameter.split("=");
  const key = parameterList[0];
  const value = decodeURIComponent(parameterList[1]);
  hashes[key] = value;
});

if (hashes["id"] != null) {
  document.querySelector(".id").innerText = hashes["id"];
}
if (hashes["name"] != null) {
  document.querySelector(".name").innerText = hashes["name"];
}
if (hashes["age"] != null) {
  document.querySelector(".age").innerText = hashes["age"];
}
