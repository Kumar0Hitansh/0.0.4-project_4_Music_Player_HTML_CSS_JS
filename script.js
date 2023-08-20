const title = document.querySelector("#title");
const artist = document.querySelector("#artist");

const music = document.querySelector("audio");
const img = document.querySelector("img");

// play
const playMusic = () => {
  music.play();

  // music.ATTRIBUTE_NODE('autoplay');

  play.style.visibility = "hidden";

  paus.style.visibility = "visible";

  img.classList.add("anime");
  img.classList.remove("animePaus");
};

// paus
const pausMusic = () => {
  music.pause();

  play.style.visibility = "visible";

  paus.style.visibility = "hidden";

  img.classList.remove("anime");
  img.classList.add("animePaus");
};

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;

  music.src = `media/${songs.name}.mp3`;
  img.src = `media/${songs.name}.png`;
};

songIndex = 0;

// loadSong(songs[1])

// next music

const nextMusic = () => {
  songIndex = (songIndex + 1) % songs.length;

  loadSong(songs[songIndex]);
  playMusic();
};

// previous music

const preMusic = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;

  loadSong(songs[songIndex]);
  playMusic();
};

const songs = [
  {
    name: "All Night",
    title: "All Night",
    artist: "Ap Dhillan",
  },
  {
    name: "Brown Munde",
    title: "Brown Munde",
    artist: "Ap Dhillan",
  },
  {
    name: "Dil Nu",
    title: "Dil Nu",
    artist: "Ap Dhillan",
  },
  {
    name: "Droptop",
    title: "Droptop",
    artist: "Ap Dhillan",
  },
  {
    name: "Excuses",
    title: "Excuses",
    artist: "Ap Dhillan",
  },
  {
    name: "Feels",
    title: "Feels",
    artist: "Ap Dhillan",
  },
  {
    name: "Toxic",
    title: "Toxic",
    artist: "Ap Dhillan",
  },
  {
    name: "Majhail",
    title: "Majhail",
    artist: "Ap Dhillan",
  },
  {
    name: "Top Boy",
    title: "Top Boy",
    artist: "Ap Dhillan",
  },
  {
    name: "Wo Noor",
    title: "Wo Noor",
    artist: "Ap Dhillan",
  },
];
