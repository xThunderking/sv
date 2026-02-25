const menuScreen = document.getElementById("menuScreen");
const invitationScreen = document.getElementById("invitationScreen");
const songsScreen = document.getElementById("songsScreen");

const openValentineBtn = document.getElementById("openValentineBtn");
const openSongsBtn = document.getElementById("openSongsBtn");
const backButtons = document.querySelectorAll("[data-back-to-menu]");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const giftScene = document.getElementById("giftScene");
const giftBox = document.getElementById("giftBox");

const showMenu = () => {
  menuScreen.hidden = false;
  invitationScreen.hidden = true;
  songsScreen.hidden = true;
};

const showInvitation = () => {
  menuScreen.hidden = true;
  invitationScreen.hidden = false;
  songsScreen.hidden = true;
};

const showSongs = () => {
  menuScreen.hidden = true;
  invitationScreen.hidden = true;
  songsScreen.hidden = false;
};

openValentineBtn.addEventListener("click", showInvitation);
openSongsBtn.addEventListener("click", showSongs);

backButtons.forEach((button) => {
  button.addEventListener("click", showMenu);
});

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
