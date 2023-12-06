const songsList = [
  {
    title: "Boss Party",
    type: "party",
    audioLink: `songs/Boss Party.mp3`,
    imglink: `songs/wv1.jpg`,
  },
  {
    title: "Daakko Daakko Meka",
    type: "love",
    audioLink: `songs/Daakko Daakko Meka.mp3`,
    imglink: `songs/pushpa3.jpg`,
  },
  {
    title: "Dandakadiyal",
    type: "rock",
    audioLink: `songs/Dandakadiyal.mp3`,
    imglink: `songs/cr.jpg`,
  },
  {
    title: "Saami Saami",
    type: "love",
    audioLink: `songs/Saami Saami.mp3`,
    imglink: `songs/pushpa1.jpg`,
  },
  {
    title: "Du Du",
    type: "love",
    audioLink: `songs/Du Du.mp3`,
    imglink: `songs/cr.jpg`,
  },
  {
    title: "Eyy Bidda Idhi Naa Adaa",
    type: "rock",
    audioLink: `songs/Eyy Bidda Idhi Naa Adaa.mp3`,
    imglink: `songs/pushpa2.jpg`,
  },
  {
    title: "Jinthaak Chithaka",
    type: "rock",
    audioLink: `songs/Jinthaak Chithaka.mp3`,
    imglink: `songs/cr.jpg`,
  },
  {
    title: "Mass Raja",
    type: "rock",
    audioLink: `songs/Mass Raja.mp3`,
    imglink: `songs/cr.jpg`,
  },
  {
    title: "Neekemo Andamekkuva",
    type: "love",
    audioLink: `songs/Neekemo Andamekkuva.mp3`,
    imglink: `songs/wv2.jpg`,
  },
  {
    title: "Oo Antava..Oo Oo Antava",
    type: "love",
    audioLink: `songs/Oo Antava..Oo Oo Antava.mp3`,
    imglink: `songs/pushpa4.webp`,
  },
  {
    title: "Poonakaalu Loading",
    type: "party",
    audioLink: `songs/Poonakaalu Loading.mp3`,
    imglink: `songs/wv1.jpg`,
  },
  {
    title: "Srivalli",
    type: "love",
    audioLink: `songs/Srivalli.mp3`,
    imglink: `songs/pushpa2.jpg`,
  },
];

const marq = document.querySelector(".marq");

const bottom_img=document.querySelector('.bottom-img')

const controls_img = document.querySelector('.controls-img');

let currentSongIndex = -1; 

let sourceEl = document.createElement("source");

const telugu_songs = document.querySelector(".telugu-songs");
let i = 0;
for (let song of songsList) {
  songLoader(song,i++);
}

function songLoader(obj,index) {
  let song_img_name = document.createElement("div");
    song_img_name.className = "song-img-name";
    song_img_name.dataset.index = index;

  let over_play = document.createElement("div");
  over_play.className = "overlay-play";
  song_img_name.appendChild(over_play);

  let song_img = document.createElement("img");
    song_img.src = obj.imglink;
  over_play.appendChild(song_img);

  let t_songs = document.createElement("audio");
  t_songs.className = "t-songs";
  song_img_name.appendChild(t_songs);

  let sourceE = document.createElement("source");
  sourceE.src = obj.audioLink;
  sourceE.type = "audio/mp3";
  t_songs.appendChild(sourceEl);

  let song_name = document.createElement("div");
  song_name.className = "song-name-date";
  song_img_name.appendChild(song_name);

  let heading_small = document.createElement("h5");
  heading_small.className = "heading-small";
  heading_small.textContent = obj.title;
  song_name.appendChild(heading_small);

  telugu_songs.appendChild(song_img_name);

  song_img.addEventListener("click", () => {
    currentSongIndex=index;
    audioPlayer(obj);
  });
    let addToPlaylistButton = document.createElement("button");
    addToPlaylistButton.textContent = "+";
    addToPlaylistButton.addEventListener("click", () =>
      addToCurrentPlaylist(obj)
    );
    song_img_name.appendChild(addToPlaylistButton);
}

const controls = document.querySelector(".cntrl");

let currentPlayingLink = ""; // Variable to store the currently playing link

function audioPlayer(obj) {
  if (currentPlayingLink === obj.audioLink) {
    // If the same link is clicked again, stop the audio
    controls.pause();
    controls.currentTime = 0; // Reset playback to the beginning
    currentPlayingLink = "";
  } else {
      // If a different link is clicked, play the audio
      bottom_img.src = obj.imglink;
      marq.textContent = obj.title;
    sourceEl.src = "";
    sourceEl.src = obj.audioLink;
    sourceEl.type = "audio/mp3";
    controls.innerHTML = ""; // Clear previous sources
    controls.appendChild(sourceEl);
    controls.load(); // Load the new source
    controls.play();
    currentPlayingLink = obj.audioLink;
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--; // Decrement the current index
    audioPlayer(songsList[currentSongIndex]);
  } else {
    // Optionally, you may want to loop to the last song when at the beginning
    currentSongIndex = songsList.length - 1;
    audioPlayer(songsList[currentSongIndex]);
  }
}

function nextSong() {
  if (currentSongIndex < songsList.length - 1) {
    currentSongIndex++; // Decrement the current index
    audioPlayer(songsList[currentSongIndex]);
  } else {
    // Optionally, you may want to loop to the last song when at the beginning
    currentSongIndex = 0;
    audioPlayer(songsList[currentSongIndex]);
  }
}

const rock = [
    {
    title: "Dandakadiyal",
    type: "rock",
    audioLink: `songs/Dandakadiyal.mp3`,
    },
    {
    title: "Eyy Bidda Idhi Naa Adaa",
    type: "rock",
    audioLink: `songs/Eyy Bidda Idhi Naa Adaa.mp3`,
    },
    {
    title: "Eyy Bidda Idhi Naa Adaa",
    type: "rock",
    audioLink: `songs/Eyy Bidda Idhi Naa Adaa.mp3`,
  },
  {
    title: "Jinthaak Chithaka",
    type: "rock",
    audioLink: `songs/Jinthaak Chithaka.mp3`,
  },
  {
    title: "Mass Raja",
    type: "rock",
    audioLink: `songs/Mass Raja.mp3`,
  },
];

const love = [
    {
    title: "Daakko Daakko Meka",
    type: "love",
    audioLink: `songs/Daakko Daakko Meka.mp3`,
    },
    {
    title: "Neekemo Andamekkuva",
    type: "love",
    audioLink: `songs/Neekemo Andamekkuva.mp3`,
  },
  {
    title: "Oo Antava..Oo Oo Antava",
    type: "love",
    audioLink: `songs/Oo Antava..Oo Oo Antava.mp3`,
    },
  {
    title: "Srivalli",
    type: "love",
    audioLink: `songs/Srivalli.mp3`,
  },
];

const party = [
    {
    title: "Boss Party",
    type: "party",
    audioLink: `songs/Boss Party.mp3`,
    },
    {
    title: "Poonakaalu Loading",
    type: "party",
    audioLink: `songs/Poonakaalu Loading.mp3`,
  },
];

const playlistData = [
    
    {
        name: 'Default',
        playlist:[],
    },
];

const filterlistData = [
    {
    name: "All",
    playlist: songsList,
  },
  {
    name: "love",
    playlist: love,
  },    {
    name: "party",
    playlist: party,
  },
  {
    name: "rock",
    playlist: rock,
  },
];

// Display existing playlists
const playlistContainer = document.getElementById("playlistContainer");
const dropdownContent = document.getElementById("dropdownContent");

const filter_dropdownContent = document.getElementById("filter-dropdownContent");

function filterDisplayPlaylists() {
  filter_dropdownContent.innerHTML = ""; // Clear previous options

  filterlistData.forEach((playlist, index) => {
    const playlistItem = document.createElement("option");
    playlistItem.value = index; // Set the value to the index for identification
    playlistItem.textContent = playlist.name;
    filter_dropdownContent.appendChild(playlistItem);

  });
}

filterDisplayPlaylists();

function displayPlaylists() {
  dropdownContent.innerHTML = ""; // Clear previous options

  playlistData.forEach((playlist, index) => {
    const playlistItem = document.createElement("option");
    playlistItem.value = index; // Set the value to the index for identification
    playlistItem.textContent = playlist.name;
    dropdownContent.appendChild(playlistItem);
  });
}

const listDisplay = document.querySelector(".list-display");

const filterListDisplay = document.querySelector(".filter-list-display");

function enterFilterPlaylist(index) {
  filterListDisplay.innerHTML = ""; // Clear previous songs
  const selectedPlaylist = filterlistData[index];
  filter_play_name.textContent = `${filterlistData[index].name} songs`;
  for (let item of selectedPlaylist.playlist) {
    filterListSongLoader(item);
  }
}

// Function to display songs in a playlist
function enterPlaylist(index) {
  listDisplay.innerHTML = ""; // Clear previous songs
    const selectedPlaylist = playlistData[index];
    play_name.textContent = `${playlistData[index].name} songs`;
  for (let item of selectedPlaylist.playlist) {
    listSongLoader(item);
  }
}
function filterToggleDropdown() {
  const selectedIndex = filter_dropdownContent.value;
  console.log(selectedIndex);
  if (selectedIndex !== null) {
    enterFilterPlaylist(selectedIndex);
  }
}
// Function to toggle playlist dropdown
function toggleDropdown() {
  const selectedIndex = dropdownContent.value;
  console.log(selectedIndex);
  if (selectedIndex !== null) {
    enterPlaylist(selectedIndex);
  }
}

// Function to create a new playlist
function createPlaylist() {
  const newPlaylistInput = document.getElementById("newPlaylistInput");
  const newPlaylistName = newPlaylistInput.value.trim();

  if (newPlaylistName !== "") {
    // Create a new playlist object with a name and an empty playlist array
    const newPlaylist = {
      name: newPlaylistName,
      playlist: [],
    };

    playlistData.push(newPlaylist);
    displayPlaylists();
    newPlaylistInput.value = "";
  }
}
const play_name = document.querySelector(".play-name");
const filter_play_name = document.querySelector(".filter-play-name");

// Initial display of playlists
displayPlaylists();

// Function to load songs in the list display
function listSongLoader(obj) {
  let songContainer = document.createElement("div");
    songContainer.className = "list-song-container";
    
  let song_img_name = document.createElement("div");
  song_img_name.className = "list-song-img-name";

  let over_play = document.createElement("div");
  over_play.className = "list-overlay-play";
  songContainer.appendChild(over_play);

  let t_songs = document.createElement("audio");
  t_songs.className = "t-songs";
  songContainer.appendChild(t_songs);

  let sourceE = document.createElement("source");
  sourceE.src = obj.audioLink;
  sourceE.type = "audio/mp3";
  t_songs.appendChild(sourceEl);

  let song_name = document.createElement("div");
  song_name.className = "song-name-date";
  songContainer.appendChild(song_name);

  let heading_small = document.createElement("h5");
  heading_small.className = "heading-small";
  heading_small.textContent = obj.title;
  song_name.appendChild(heading_small);

  telugu_songs.appendChild(song_img_name);

  heading_small.addEventListener("click", () => {
    audioPlayer(obj);
  });
    
  listDisplay.appendChild(songContainer);
}

function addToCurrentPlaylist(song) {
  const selectedPlaylistIndex = dropdownContent.value;

  if (selectedPlaylistIndex !== null) {
    playlistData[selectedPlaylistIndex].playlist.push(song);
    enterPlaylist(selectedPlaylistIndex); // Update the displayed songs
  }
}

function filterListSongLoader(obj) {
  let songContainer = document.createElement("div");
  songContainer.className = "list-song-container";

  let song_img_name = document.createElement("div");
  song_img_name.className = "list-song-img-name";

  let over_play = document.createElement("div");
  over_play.className = "list-overlay-play";
  songContainer.appendChild(over_play);

  let t_songs = document.createElement("audio");
  t_songs.className = "t-songs";
  songContainer.appendChild(t_songs);

  let sourceE = document.createElement("source");
  sourceE.src = obj.audioLink;
  sourceE.type = "audio/mp3";
  t_songs.appendChild(sourceEl);

  let song_name = document.createElement("div");
  song_name.className = "song-name-date";
  songContainer.appendChild(song_name);

  let heading_small = document.createElement("h5");
  heading_small.className = "heading-small";
  heading_small.textContent = obj.title;
  song_name.appendChild(heading_small);

  telugu_songs.appendChild(song_img_name);

  heading_small.addEventListener("click", () => {
    audioPlayer(obj);
  });

  filterListDisplay.appendChild(songContainer);
}

const container = document.querySelector('.container')

const filter_section = document.querySelector(".filter-section");

const play_list = document.querySelector(".play-list");

function setTheme(theme) {
    const body = document.body;

    if (theme === 'dark') {
        telugu_songs.classList.add("dark-theme");
        container.classList.add("dark-theme");
        filter_section.classList.add("dark-theme");
        play_list.classList.add("dark-theme");
    } else {
        telugu_songs.classList.remove("dark-theme");
        container.classList.remove("dark-theme");
        filter_section.classList.remove("dark-theme");
         play_list.classList.remove("dark-theme");
    }

    // Save the user's theme preference in local storage
    localStorage.setItem('theme', theme);
}
