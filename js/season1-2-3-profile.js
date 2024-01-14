const openButtons = document.querySelectorAll('.open');
const closeButtons = document.querySelectorAll('.close-modal');

function openModal(index) {
    console.log(`Opening modal for index ${index}`);
    const modal = document.querySelectorAll('.bg-modal')[index];
    modal.style.display = 'flex';
}

function closeModal(index) {
    console.log(`Closing modal for index ${index}`);
    const modal = document.querySelectorAll('.bg-modal')[index];
    modal.style.display = 'none';
}

openButtons.forEach((button, index) => {
    button.addEventListener('click', () => openModal(index));
});

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => closeModal(index));
});

var charProfiles = document.querySelectorAll('.char-profile');

charProfiles.forEach(function (charProfile) {
    charProfile.addEventListener('click', function () {
        console.log('Character profile clicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
var EpProfiles = document.querySelectorAll('.episode');

EpProfiles.forEach(function (EpProfile) {
    EpProfile.addEventListener('click', function () {
        console.log('Episode profile clicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function muteMusic() {
    var audio = document.getElementById('audio');
    audio.muted = !audio.muted;
}