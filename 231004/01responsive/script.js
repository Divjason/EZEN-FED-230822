const toggleBtn = document.querySelector(".menu_toggle_btn");
const navigation = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navigation.classList.toggle("active");
});
