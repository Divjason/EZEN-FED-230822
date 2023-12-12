const bodyContent = document.body;
const btn = document.querySelector("#btn");
const btnExit = document.querySelector("#btnExit");

const myRequestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};

btn.addEventListener("click", () => {
  myRequestFullScreen(bodyContent);
});

const myCancelFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

btnExit.addEventListener("click", () => {
  myCancelFullScreen();
});
