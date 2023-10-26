const email = document.querySelector("#email");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;
    userName = userName.substring(0, userName.length - half);
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
