const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.getElementById("progress-bar");
const timeLabel = document.getElementById("time");
const overlay = document.getElementById("overlay");

let isPlaying = false;

function startSite() {
  music.play();
  document.body.classList.add("active");
  overlay.style.display = "none"; // esconder overlay
  isPlaying = true;
}

playBtn.addEventListener("click", startSite);

// Progress bar do áudio
music.addEventListener("timeupdate", () => {
  if (music.duration) {
    const progress = (music.currentTime / music.duration) * 100;
    progressBar.style.width = progress + "%";
    let minutes = Math.floor(music.currentTime / 60);
    let seconds = Math.floor(music.currentTime % 60);
    if (seconds < 10) seconds = "0" + seconds;
    timeLabel.textContent = `${minutes}:${seconds}`;
  }
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
});

// Animação de corações
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// Galeria de imagens
function loadImages() {
  const gallery = document.getElementById('image-gallery');
  gallery.innerHTML = '';
  const images = [
      'gosta/gosta1.jpg','gosta/gosta2.jpg','gosta/gosta3.jpg',
      'gosta/gosta4.jpg','gosta/gosta5.jpg','gosta/gosta6.jpg',
      'gosta/gosta7.jpg','gosta/gosta8.jpg','gosta/gosta9.jpg'
  ];
  images.forEach((imageSrc) => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = "Coisa que a Nina ama";
      img.onload = () => img.classList.add("loaded");
      gallery.appendChild(img);
  });
  const finalButton = document.createElement('button');
  finalButton.innerHTML = '❤️ Clique para ver o que realmente <span class="black-text">Você</span> mais Ama ❤️';
  finalButton.onclick = showFinalSurprise;
  finalButton.classList.add('final-button');
  gallery.appendChild(finalButton);
}

function showFinalSurprise() {
  const gallery = document.getElementById('image-gallery');
  gallery.innerHTML = '';

  const finalImage = document.createElement('img');
  finalImage.src = 'gosta/samuel.jpg';
  finalImage.alt = 'O que a Nina realmente mais gosta';
  finalImage.classList.add("loaded");
  gallery.appendChild(finalImage);
  const caption = document.createElement('p');
  caption.textContent = "Com carinho, Samuel ❤️";
  caption.classList.add("caption");
  gallery.appendChild(caption);
}
