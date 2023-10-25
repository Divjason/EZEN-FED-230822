const items = document.querySelectorAll("article");

for (let el of items) {
  el.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  el.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
