 // Add your songs to the playlist array
    const playlist = [
        {title: "Agar Tum Saath Ho", url: "audio/7.mp3"},
        {title: "Suna Hai (PaglaSongs)", url: "audio/8.mp3"},
        {title: "Dilbar Neha Kakkar,", url: "audio/9.mp3"},
        {title: "Duniya Abhijit Vaghani", url: "audio/10.mp3"},
        {title: "Lagdi Lahore Di", url: "audio/11.mp3"},
        {title: "Putt Jatt Da", url: "audio/12.mp3"},
        {title: "On my way", url: "audio/1.mp3"}

    ];

      const myplaylist = [
        {title: "Hum Mar Jayenge", url: "audio/2.mp3"},
        {title: "On and On(PagalWorld)", url: "audio/3.mp3"},
        {title: "Akhian nu chain na aave", url: "audio/4.mp3"},
        {title: "Dard Ka Kabil Bana Diya", url: "audio/5.mp3"},
        {title: "Hum Kis Galli ", url: "audio/6.mp3"},
        {title: "Baarishein - Pagalworld", url: "audio/13.mp3"},
        {title: "Vaaste (Pagalworld)", url: "audio/14.mp3"}

    ];

      const my1playlist = [
        {title: "Aashiqui 2 Mashup", url: "audio/21.mp3"},
        {title: "Milne Hai Mujhse Aayi ", url: "audio/20.mp3"},
        {title: "Sunn Raha Hai  ", url: "audio/19.mp3"},
        {title: "Aasan Nahin Yahan", url: "audio/18.mp3"},
        {title: "Bhula Dena ", url: "audio/17.mp3"},
        {title: "Piya Aaye Na", url: "audio/16.mp3"},
        {title: "Meri Aashiqui", url: "audio/15.mp3"}

    ];

    const audioPlayer = document.getElementById("audio-player");
    const songList = document.getElementById("song-list");
    const mysongList = document.getElementById("mysong-list");
    const my1songList = document.getElementById("my1song-list");

    // Create playlist
    my1playlist.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="songs/1.mp3" download="mp3"><i class="fa-solid fa-circle-down" style="color: white; font-size: 18px;"> </i></a> <i class="fa-regular fa-circle-play"></i> <a href="#" class="song-link" data-index="${index}">${song.title}</a>`;
        songList.appendChild(li);
        
    });
     myplaylist.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="songs/1.mp3" download="mp3"><i class="fa-solid fa-circle-down" style="color: white; font-size: 18px;"> </i></a> <i class="fa-regular fa-circle-play"></i> <a href="#" class="song-link" data-index="${index}">${song.title}</a>`;
        mysongList.appendChild(li);
        
    });

     my1playlist.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="songs/1.mp3" download="mp3"><i class="fa-solid fa-circle-down" style="color: white; font-size: 18px;"></i></a> <i class="fa-regular fa-circle-play"></i> <a href="#" class="song-link" data-index="${index}">${song.title}</a>`;
        my1songList.appendChild(li);
        
    });

    // Play selected song
    function playSong(index) {
        const selectedSong = my1songList[index];
        audioPlayer.src = selectedSong.url;
        audioPlayer.play();
    }

    
    // Play selected song
    function playSong(index) {
        const selectedSong = myplaylist[index];
        audioPlayer.src = selectedSong.url;
        audioPlayer.play();
    }


    
    // Play selected song
    function playSong(index) {
        const selectedSong = my1playlist[index];
        audioPlayer.src = selectedSong.url;
        audioPlayer.play();
    }

    // Event listener for song links
    const songLinks = document.querySelectorAll(".song-link");
    songLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute("data-index"));
            playSong(index);
        });
    });

    // Play control
    const playBtn = document.createElement("button");
    playBtn.innerText = "Play";
    playBtn.addEventListener("click", () => {
        audioPlayer.play();
    });
    audioPlayer.addEventListener("play", () => {
        playBtn.innerText = "Pause";
    });
    audioPlayer.addEventListener("pause", () => {
        playBtn.innerText = "Play";
    });

