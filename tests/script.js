
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');

const songs = ['por-la-fe.mp3', 'por-la-fe.mp3', 'por-la-fe.mp3'];
let songIndex = 0;

function loadSong(index) {
    audio.src = songs[index];
    audio.load();
    playSong();
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
}

function setProgress(e) {
    const duration = audio.duration;
    const moveTo = (e.offsetX / progressBar.offsetWidth) * duration;
    audio.currentTime = moveTo;
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);

// Load the first song initially
loadSong(songIndex);
