const btn = document.querySelectorAll(".button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.classList.toggle("show");
  });
});
