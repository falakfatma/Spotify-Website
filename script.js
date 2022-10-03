console.log('welcome to spotify');
// initialize the variables
let songIndex = 0;
let audioElem = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItem = Array.from(document.getElementsByClassName('songItem')); 
let gif= document.getElementById('gif');
let masterPlayName= document.getElementById('masterPlayName');
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName:'Who-I-Am : Anne-Max', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'Trap-crap: justin-Biber ', filePath:'songs /2.mp3', coverPath:'covers/2.jpg'},
    {songName:'They Mad-Lowney Pesci : justin-Biber', filePath:'songs /3.mp3', coverPath:'covers/3.jpg'},
    {songName:'Rich-The-Kid -Plug Walk :Senena-Gomez', filePath:'songs /4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Salame-Ishq: Arijit-Singh', filePath:'songs /5.mp3', coverPath:'covers/5.jpg'},
    {songName:'Safety-Dance : justin-Biber', filePath:'songs /6.mp3', coverPath:'covers/6.jpg'},
    {songName:'Back-It-Up : Anne', filePath:'songs /7.mp3', coverPath:'covers/7.jpg'},
    {songName:'True-Love: justin-Biber', filePath:'songs /8.mp3', coverPath:'covers/10.jpg'},
    {songName:'Who-I-Am: Anne-Max', filePath:'songs /9.mp3', coverPath:'covers/9.jpg'},
]
songItem.forEach((element, i)=>{
//  console.log(element,i);
 element.getElementsByTagName('img')[0].src = songs[i].coverPath;
 element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

//  element.getElementsByClassName('img')[0]=songs[i].coverPath
//  let elem=  element.getElementsByTagName('img')[1].src=songs[i[1]].coverPath
//  conssole.log(elem)
});

// audioElem.play();
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElem.paused || audioElem.currentTime<=0){
        audioElem.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElem.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})
    //this code is needed later
//     // else if(audioElem.play || audioElem.currentTime>0){
//         audioElem.pause();
//         masterPlay.classList.remove(' fa-pause-circle')
//         masterPlay.classList.add(' fa-play-circle')
//     }
// listen to events
audioElem.addEventListener('timeupdate',()=>{
// console.log('timeupdate');
//seekBar
progress=parseInt((audioElem.currentTime/audioElem.duration)*100);
progressBar.value=progress;
})
 
progressBar.addEventListener("change",()=>{
    audioElem.currentTime=progressBar.value * audioElem.duration/100;
    // console.log();
});
const makeAllPlay = ()=>(
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
);

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay()
        songIndex= parseInt(e.target.id)
        // console.log(songIndex);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElem.src =`songs/${songIndex+1}.mp3`;
        masterPlayName.innerText=songs[songIndex].songName;
        audioElem.currentTime=0;
        audioElem.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')


        //Self Text
        // if(audioElem.currentTime > 0){
        //     songItemPlay.classList.remove('fa-play-circle')
        //     songItemPlay.classList.add('fa-pause-circle')
            
        // }
        // else{
        //     // songItemPlay.classList.add('fa-pause-circle')
        //     // songItemPlay.classList.remove('fa-play-circle')
        //     console.log(songIndex)
        // }
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
        audioElem.src =`songs/${songIndex+1}.mp3`;
        audioElem.currentTime=0;
        audioElem.play();
        masterPlayName.innerText=songs[songIndex].songName;

        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    
})
document.getElementById('previous').addEventListener('click',()=>{
    // masterPlayName.innerText=songs[songIndex].songName;
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
        audioElem.src =`songs/${songIndex+1}.mp3`;
        masterPlayName.innerText=songs[songIndex].songName;
        audioElem.currentTime=0;
        audioElem.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    
})