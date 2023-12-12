const twBtn = document.querySelector("#tweetButton");
const twArea = document.querySelector("#tweetTextArea");

twBtn.addEventListener("click", () => {
  const twText = twArea.value;
  const encodedText = encodeURIComponent(twText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
