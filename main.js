const navBar = document.querySelector('.nav-bar');

function toggleNav() {
  navBar.classList.toggle('active');
}

function muteMusic() {
  var audio = document.getElementById('audio');
  audio.muted = !audio.muted;
}