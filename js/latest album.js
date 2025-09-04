const mymusic = new Audio('audio/vande.mp3');


const mysongs = [
    {
        id:'1',
        mysongName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Songs/1.jpg"
    },
    {
        id:'2',
        mysongName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Songs/2.jpg"
    },
    {
        id:"3",
        mysongName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/Songs/3.jpg",
    },
    {
        id:"4",
        mysongName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/Songs/4.jpg",
    },
    {
        id:"5",
        mysongName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/Songs/5.jpg",
    },
    {
        id:"6",
        mysongName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/Songs/6.jpg",
    },
    {
        id:"7",
        mysongName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/Songs/7.jpg",
    },
    {
        id:"8",
        mysongName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/Songs/8.jpg",
    },
    {
        id:"9",
        mysongName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/Songs/9.jpg",
    },
    {
        id:"10",
        mysongName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/Songs/10.jpg",
    },
    {
        id:"11",
        mysongName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/Songs/11.jpg",
    },
    {
        id:"12",
        mysongName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/Songs/12.jpg",
    },
    {
        id:"13",
        mysongName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/Songs/13.jpg",
    },
    {
        id:"14",
        mysongName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/Songs/14.jpg",
    },
    {
        id:"15",
        mysongName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/Songs/15.jpg",
    },
]


Array.from(document.getElementsByClassName('mysongItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = mysongs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = mysongs[i].mysongName;
})


let mymasterPlay = document.getElementById('mymasterPlay');
let mywave = document.getElementsByClassName('mywave')[0];

mymasterPlay.addEventListener('click',()=>{
    if (mymusic.paused || mymusic.currentTime <=0) {
        mymusic.play();
        mymasterPlay.classList.remove('bi-play-fill');
        mymasterPlay.classList.add('bi-pause-fill');
        mywave.classList.add('active2');
    } else {
        mymusic.pause();
        mymasterPlay.classList.add('bi-play-fill');
        mymasterPlay.classList.remove('bi-pause-fill');
        mywave.classList.remove('active2');
    }
} )


const mymakeAllPlays = () =>{
    Array.from(document.getElementsByClassName('myplayListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const mymakeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('mysongItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let myindex = 0;
let myposter_master_play = document.getElementById('myposter_master_play');
let mytitle = document.getElementById('mytitle');
Array.from(document.getElementsByClassName('myplayListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        myindex = e.target.id;
        mymakeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        mymusic.src = `audio/${myindex}.mp3`;
        myposter_master_play.src =`img/song/${myindex}.jpg`;
        mymusic.play();
        let mysong_title = mysongs.filter((ele)=>{
            return ele.id == myindex;
        })

        mysong_title.forEach(ele =>{
            let {mysongName} = ele;
            mytitle.innerHTML = mysongName;
        })
        mymasterPlay.classList.remove('bi-play-fill');
        mymasterPlay.classList.add('bi-pause-fill');
        mywave.classList.add('active2');
        mymusic.addEventListener('ended',()=>{
            mymasterPlay.classList.add('bi-play-fill');
            mymasterPlay.classList.remove('bi-pause-fill');
            mywave.classList.remove('active2');
        })
        mymakeAllBackgrounds();
        Array.from(document.getElementsByClassName('mysongItem'))[`${myindex-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let mycurrentStart = document.getElementById('mycurrentStart');
let mycurrentEnd = document.getElementById('mycurrentEnd');
let myseek = document.getElementById('myseek');
let mybar2 = document.getElementById('mybar2');
let mydot = document.getElementsByClassName('mydot')[0];

mymusic.addEventListener('timeupdate',()=>{
    let mymusic_curr = mymusic.currentTime;
    let mymusic_dur = mymusic.duration;

    let mymin = Math.floor(mymusic_dur/60);
    let mysec = Math.floor(mymusic_dur%60);
    if (mysec<10) {
        mysec = `0${mysec}`
    }
    mycurrentEnd.innerText = `${mymin}:${mysec}`;

    let mymin1 = Math.floor(mymusic_curr/60);
    let mysec1 = Math.floor(mymusic_curr%60);
    if (mysec1<10) {
        mysec1 = `0${mysec1}`
    }
    mycurrentStart.innerText = `${mymin1}:${mysec1}`;

    let myprogressbar = parseInt((mymusic.currentTime/mymusic.duration)*100);
    myseek.value = myprogressbar;
    let myseekbar = myseek.value;
    mybar2.style.width = `${myseekbar}%`;
    mydot.style.left = `${myseekbar}%`;
})

myseek.addEventListener('change', ()=>{
    mymusic.currentTime = myseek.value * mymusic.duration/100;
})

mymusic.addEventListener('ended', ()=>{
    mymasterPlay.classList.add('bi-play-fill');
    mymasterPlay.classList.remove('bi-pause-fill');
    mywave.classList.remove('active2');
})


let myvol_icon = document.getElementById('myvol_icon');
let myvol = document.getElementById('myvol');
let myvol_dot = document.getElementById('myvol_dot');
let myvol_bar = document.getElementsByClassName('myvol_bar')[0];

myvol.addEventListener('change', ()=>{
    if (myvol.value == 0) {
        myvol_icon.classList.remove('bi-volume-down-fill');
        myvol_icon.classList.add('bi-volume-mute-fill');
        myvol_icon.classList.remove('bi-volume-up-fill');
    }
    if (myvol.value > 0) {
        myvol_icon.classList.add('bi-volume-down-fill');
        myvol_icon.classList.remove('bi-volume-mute-fill');
        myvol_icon.classList.remove('bi-volume-up-fill');
    }
    if (myvol.value > 50) {
        myvol_icon.classList.remove('bi-volume-down-fill');
        myvol_icon.classList.remove('bi-volume-mute-fill');
        myvol_icon.classList.add('bi-volume-up-fill');
    }

    let myvol_a = myvol.value;
    myvol_bar.style.width = `${myvol_a}%`;
    myvol_dot.style.left = `${myvol_a}%`;
    mymusic.volume = myvol_a/100;
})



let myback = document.getElementById('myback');
let mynext = document.getElementById('mynext');

myback.addEventListener('click', ()=>{
    myindex -= 1;
    if (myindex < 1) {
        myindex = Array.from(document.getElementsByClassName('mysongItem')).length;
    }
    mymusic.src = `audio/${myindex}.mp3`;
    myposter_master_play.src =`img/song/${myindex}.jpg`;
    mymusic.play();
    let mysong_title = mysongs.filter((ele)=>{
        return ele.id == myindex;
    })

    mysong_title.forEach(ele =>{
        let {mysongName} = ele;
        mytitle.innerHTML = mysongName;
    })
    mymakeAllPlays()

    document.getElementById(`${myindex}`).classList.remove('bi-play-fill');
    document.getElementById(`${myindex}`).classList.add('bi-pause-fill');
    mymakeAllBackgrounds();
    Array.from(document.getElementsByClassName('mysongItem'))[`${myindex-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
mynext.addEventListener('click', ()=>{
    myindex -= 0;
    myindex += 1;
    if (myindex > Array.from(document.getElementsByClassName('mysongItem')).length) {
        myindex = 1;
        }
    mymusic.src = `audio/${myindex}.mp3`;
    myposter_master_play.src =`img/song/${myindex}.jpg`;
    mymusic.play();
    let mysong_title = mysongs.filter((ele)=>{
        return ele.id == myindex;
    })

    mysong_title.forEach(ele =>{
        let {mysongName} = ele;
        mytitle.innerHTML = mysongName;
    })
    mymakeAllPlays()

    document.getElementById(`${myindex}`).classList.remove('bi-play-fill');
    document.getElementById(`${myindex}`).classList.add('bi-pause-fill');
    mymakeAllBackgrounds();
    Array.from(document.getElementsByClassName('mysongItem'))[`${myindex-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let myleft_scroll = document.getElementById('myleft_scroll');
let myright_scroll = document.getElementById('myright_scroll');
let mypop_song = document.getElementsByClassName('mypop_song')[0];

myleft_scroll.addEventListener('click', ()=>{
    mypop_song.myscrollLeft -= 330;
})
myright_scroll.addEventListener('click', ()=>{
    mypop_song.myscrollLeft += 330;
})


let myleft_scrolls = document.getElementById('myleft_scrolls');
let myright_scrolls = document.getElementById('myright_scrolls');
let myitem = document.getElementsByClassName('myitem')[0];

myleft_scrolls.addEventListener('click', ()=>{
    myitem.myscrollLeft -= 330;
})
myright_scrolls.addEventListener('click', ()=>{
    myitem.myscrollLeft += 330;
})




