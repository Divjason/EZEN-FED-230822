const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").value;
  let count = word.length;
  result.innerText = `${count}`;
});
