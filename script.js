let noClicks = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noCatImg = document.getElementById("noCatImg");

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// NO BUTTON CON GATOS
noBtn.addEventListener("click", () => {
  noClicks++;

  noBtn.style.transform = `scale(${1 - noClicks * 0.2})`;
  yesBtn.style.transform = `scale(${1 + noClicks * 0.2})`;

  noCatImg.classList.remove("hidden");

  if (noClicks === 1) {
    noCatImg.src = "images/gato_lupa.png";
  } 
  else if (noClicks === 2) {
    noCatImg.src = "images/gato_enojado.png";
  } 
  else {
    noCatImg.src = "images/gato_burla.png";
    noBtn.style.display = "none";
  }
});

// MAYBE
document.getElementById("maybeBtn").addEventListener("click", () => {
  showScreen("screen-maybe");
});

document.getElementById("checkPassword").addEventListener("click", () => {
  document.getElementById("passwordError").classList.remove("hidden");
});

document.getElementById("backBtn").addEventListener("click", () => {
  showScreen("screen-start");
});

// YES
yesBtn.addEventListener("click", () => {
  showScreen("screen-cats");
});

document.getElementById("toPhotos").addEventListener("click", () => {
  showScreen("screen-photos");
  updatePhoto();
});

// PHOTOS
const photos = [
  "images/foto1.jpg",
  "images/foto2.jpg",
  "images/foto3.jpg"
];

const texts = [
  "Gracias por hacerme tan feliz 💖",
  "Cada momento contigo es especial e inolvidable ✨",
  "Este 14 quiero que sea contigo 💘",
  "TE AMO CON TODO MI CORAZÓN ❤️"
];

let photoIndex = 0;

function updatePhoto() {
  document.getElementById("slide").src = photos[photoIndex % photos.length];
  document.getElementById("photoText").innerText = texts[photoIndex];
}

document.getElementById("nextPhoto").addEventListener("click", () => {
  photoIndex++;
  if (photoIndex < texts.length - 1) {
    updatePhoto();
  } else {
    showScreen("screen-memes");
  }
});

// FINAL
document.getElementById("toFinal").addEventListener("click", () => {
  showScreen("screen-final");
});