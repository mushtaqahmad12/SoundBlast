
document.addEventListener('DOMContentLoaded', () => {
    const src = [
      [
        "Alan walker fade", "Alan walker", "songs/1.mp3", "img/song/2.jpg"
      ],
      [
        "Cartoon on & on", "Denial levi", "songs/2.mp3",
        "img/song/3.jpg"
      ],
      [
        "Warryio - mortals", "mortals", "songs/3.mp3", "img/song/4.jpg"
      ],
      [
        "Ertugrul gazi", "Ertugrul", "songs/4.mp3", "img/song/5.jpg"
      ],
      [
        "Electronic music", "Electro", "songs/5.mp3", "img/song/6.jpg"
      ],
       [
        "Suna Hai", "Neha Kakker", "songs/8.mp3", "img/Songs/8.jpg"
      ],
       [
        "Dilber", "Satyameva", "songs/9.mp3", "img/Songs/9.jpg"
      ]
      
    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h4');
      var track_text = document.createElement('p');
      
      artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('chart-item');
      listItem.dataset.index = x;
      
      document.getElementById('chart-list').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.chart-item');
    listItems.forEach(el => {
      el.onclick = () => {
        displayTrack(el.dataset.index);
      };
    });
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('chart-list').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
      document.getElementById('chart-title').innerText = number + ": " + artist;
      document.getElementById('chart-song_title').innerText = track;
      var albumArt = document.getElementById('chart-art');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('chart-audio').src = audio;
    }
  })