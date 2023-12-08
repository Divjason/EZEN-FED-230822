const buttons = document.querySelectorAll("p > span");
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
}
