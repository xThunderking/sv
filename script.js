const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const giftScene = document.getElementById("giftScene");
const giftBox = document.getElementById("giftBox");

yesBtn.addEventListener("click", () => {
  giftScene.classList.add("open");
  giftBox.classList.remove("shake");
});

noBtn.addEventListener("click", () => {
  if (giftScene.classList.contains("open")) {
    return;
  }

  giftBox.classList.remove("shake");
  void giftBox.offsetWidth;
  giftBox.classList.add("shake");
});
